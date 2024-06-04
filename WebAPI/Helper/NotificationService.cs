using Microsoft.Extensions.Options;
using SendGrid;
using SendGrid.Helpers.Mail;
using System.Dynamic;
using System.Net;
using WebAPI.ViewModels;

namespace WebAPI.Helper
{
    public class EmailTemplate
    {
        public required string TemplateId { get; set; }

        public static EmailTemplate AdminSignupEmail
        {
            get { return new EmailTemplate() { TemplateId = "d-79e9266e67524a0ea7d84fc11b2b2cd1" }; }
        }
        public static EmailTemplate UserSignupEmail
        {
            get { return new EmailTemplate() { TemplateId = "d-79e9266e67524a0ea7d84fc11b2b2cd1" }; }
        }
    }
    public class EmailService(IOptions<AppSettings> appSettings)
    {
        private readonly string ApiKey = appSettings.Value.SendGridApiKey;
        private readonly string SenderName = appSettings.Value.SendGridSenderName;
        private readonly string SenderEmail = appSettings.Value.SendGridSenderEmail;
        private readonly string AdminName = appSettings.Value.AdminName;
        private readonly string AdminEmail = appSettings.Value.AdminEmail;
        private readonly string UserName = appSettings.Value.UserName;
        public async Task SendAdminSignup(SignupEmailViewModel content)
        {
            var from = new EmailAddress(SenderEmail, SenderName);
            var to = new EmailAddress(AdminEmail, AdminName);
            await SendEmail(EmailTemplate.AdminSignupEmail,from,to,content);
        }
        public async Task SendUserSignup(SignupEmailViewModel content)
        {
            var from = new EmailAddress(SenderEmail, SenderName);
            var to = new EmailAddress(content.Email, UserName);
            await SendEmail(EmailTemplate.UserSignupEmail,from,to,content);
        }
        private async Task SendEmail(EmailTemplate template, EmailAddress from, EmailAddress to, dynamic templateData)
        {
            dynamic templateDataContainer = new ExpandoObject();
            templateDataContainer.Data = templateData;
            templateDataContainer.User = AdminEmail;
                (templateDataContainer as IDictionary<string, object>).Add("it", true);

            var client = new SendGridClient(ApiKey);
            var msg = MailHelper.CreateSingleTemplateEmail(from, to, template.TemplateId, templateDataContainer);

            var response = await client.SendEmailAsync(msg);
            if (response.StatusCode != HttpStatusCode.Accepted)
            {
                throw new Exception($"Error sending email {template.TemplateId}");
            }
        }
    }
}