using System;

class Task
{
    public string Title { get; set; }
    public TaskStatus Status { get; set; }
    public Task(string title, TaskStatus status)
    {
        Title = title;
        Status = status;
    }

    // Simple helper to change the task status
    public void ChangeStatus(TaskStatus newStatus) => Status = newStatus;
}
