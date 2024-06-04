namespace WebAPI.Helper
{
    public class AppSettings
    {
        public string SendGridApiKey {get; set; } = string.Empty;
        public string SendGridSenderName {get; set; } = string.Empty;
        public string SendGridSenderEmail {get; set; } = string.Empty;
        public string AdminName {get; set; } = string.Empty;
        public string AdminEmail {get; set; } = string.Empty;
        public string UserName {get; set; } = string.Empty;
    }
}