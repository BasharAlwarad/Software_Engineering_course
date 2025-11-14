// Enums grouped into one file for clarity (only enums related to this lecture)
using System;

enum Day : byte // Underlying type can be specified
{
    Sunday,
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday
}

// Task status used in the minimal Task example
enum TaskStatus { NotStarted, InProgress, Completed, Cancelled }
enum Errors { NotFound=404, ServerError=500, AuthError=401, UnAuthorized=403 }
