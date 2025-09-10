export default function Contact() {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="mx-auto w-full col-span-1">
          <h2 className="text-3xl font-bold">Contact Us</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Have questions or need support? Our team is here to help you.
            Fill out the form and we’ll get back to you shortly.
          </p>
          <p className="mt-6 text-sm text-muted-foreground">
            📍 Address: 123 Main Street, Dhaka, Bangladesh <br />
            📧 Email: support@payzo.com <br />
            📞 Phone: +880 1234-567890
          </p>
        </div>

        {/* Right Form */}
        <form className="shadow-md rounded-2xl p-8 space-y-6 border">
          <div>
            <label className="block text-sm font-medium">Name</label>
            <input
              type="text"
              className="mt-2 w-full rounded-lg border px-4 py-2 bg-background"
              placeholder="Your name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Email</label>
            <input
              type="email"
              className="mt-2 w-full rounded-lg border px-4 py-2 bg-background"
              placeholder="Your email"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Message</label>
            <textarea
              rows={4}
              className="mt-2 w-full rounded-lg border px-4 py-2 bg-background"
              placeholder="Write your message..."
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-primary text-primary-foreground font-semibold py-3 hover:opacity-90 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
