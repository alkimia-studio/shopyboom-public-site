namespace WebAPI.Helper;
public class LogHandler(ILogger logger)
{
    private readonly ILogger _logger = logger;

    public void LogError(Exception ex, string message = "")
    {
        _logger.LogError(ex, message);
    }
    public void LogError(string message)
    {
        _logger.LogError(message);
    }
}