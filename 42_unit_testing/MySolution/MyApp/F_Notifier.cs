public class F_Notifier
{
    // F_Notifier: Demonstrates event publishing and subscription
    // Event that is raised when a message is published
    public event EventHandler<string>? MessagePublished;

    // Publishes a message and raises the event
    public void Publish(string message)
    {
        MessagePublished?.Invoke(this, message);
    }
}
