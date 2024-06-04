using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using WebAPI.Helper;
using WebAPI.ViewModels;

namespace WebAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]/[action]")]
    public class EmailController(ILogger<EmailController> logger, IOptions<AppSettings> appSettings) : ControllerBase
    {
        private readonly LogHandler _logger = new(logger);
        private readonly EmailService _emailService = new(appSettings);

        [HttpPost]
        public async Task<ActionResult> SendSignUp([FromBody] SignupEmailViewModel viewModel)
        {
            if (viewModel == null)
                return BadRequest(false);
            try
            {
                await _emailService.SendAdminSignup(viewModel);
                await _emailService.SendUserSignup(viewModel);
                return Ok(true);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex);
                return BadRequest(false);
            }
        }
    }
}