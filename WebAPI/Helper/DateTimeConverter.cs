using System;

namespace WebAPI.Helper
{
    internal class DateTimeConverter
    {
        public static TimeOnly? ConvertToTimeOnlyRN(string? time)
        {
            if (TimeOnly.TryParse(time, out TimeOnly result))
            {
                return result;
            }
            return null;
        }

        public static DateOnly? ConvertToDateOnlyRN(string? date)
        {
            if (DateOnly.TryParse(date, out DateOnly result))
            {
                return result;
            }
            return null;
        }

        public static DateTime? ConvertToDateTimeRN(string? dateTime)
        {
            if (DateTime.TryParseExact(dateTime, "yyyy/MM/dd HH:mm:ss", null, System.Globalization.DateTimeStyles.None, out DateTime result))
            {
                return result;
            }
            return null;
        }
        public static TimeOnly ConvertToTimeOnly(string? time)
        {
            if (TimeOnly.TryParse(time, out TimeOnly result))
            {
                return result;
            }
            throw new ArgumentException("Invalid time format");
        }

        public static DateOnly ConvertToDateOnly(string? date)
        {
            if (DateOnly.TryParse(date, out DateOnly result))
            {
                return result;
            }
            throw new ArgumentException("Invalid date format");
        }

        public static DateTime ConvertToDateTime(string? dateTime)
        {
            if (DateTime.TryParseExact(dateTime, "yyyy/MM/dd HH:mm:ss", null, System.Globalization.DateTimeStyles.None, out DateTime result))
            {
                return result;
            }
            throw new ArgumentException("Invalid date time format");
        }

        public static string? ConvertToString(TimeOnly? time)
        {
            return time?.ToString("HH:mm:ss");
        }

        public static string? ConvertToString(DateOnly? date)
        {
            return date?.ToString("yyyy/MM/dd");
        }

        public static string? ConvertToString(DateTime? dateTime)
        {
            return dateTime?.ToString("yyyy/MM/dd HH:mm:ss");
        }

        public static string ConvertToString(TimeOnly time)
        {
            return time.ToString("HH:mm:ss");
        }

        public static string ConvertToString(DateOnly date)
        {
            return date.ToString("yyyy/MM/dd");
        }

        public static string ConvertToString(DateTime dateTime)
        {
            return dateTime.ToString("yyyy/MM/dd HH:mm:ss");
        }

    }
}
