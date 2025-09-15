using MyApp;
using Xunit;

// Tests for F_Notifier: event publishing and subscription
public class F_Event_subscription_assertions
{
    // Test that event is raised and received
    [Fact]
    public void Publish_RaisesMessagePublishedEvent()
    {
        var notifier = new F_Notifier();
        string? received = null;
        notifier.MessagePublished += (s, msg) => received = msg;
        notifier.Publish("Hello");
        Assert.Equal("Hello", received);
    }

    // Test that unsubscribed handler does not receive event
    [Fact]
    public void Unsubscribe_Handler_DoesNotReceiveEvent()
    {
        var notifier = new F_Notifier();
        string? received = null;
        EventHandler<string> handler = (s, msg) => received = msg;
        notifier.MessagePublished += handler;
        notifier.MessagePublished -= handler;
        notifier.Publish("Hello");
        Assert.Null(received);
    }
}
