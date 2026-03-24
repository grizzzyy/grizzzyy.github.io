import { Mail, Phone, MapPin, Github, Linkedin, Send } from 'lucide-react';

// Contact section - contact info and social links
const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'grizzyy16@gmail.com',
      href: 'mailto:grizzyy16@gmail.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '863-247-0794',
      href: 'tel:8632470794'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Lakeland, FL',
      href: null
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/grizzzyy',
      color: 'hover:bg-plum-600 hover:text-white'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/your-profile',
      color: 'hover:bg-blue-600 hover:text-white'
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-plum-700 mb-4">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blush-400 to-mauve-500 mx-auto rounded-full" />
          <p className="mt-4 text-plum-500 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, collaborations, or just having a chat about tech and design.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white/70 backdrop-blur-sm rounded-3xl border border-mauve-200/50 shadow-soft p-8 sm:p-10">
            <div className="grid md:grid-cols-2 gap-10">
              {/* Contact Information */}
              <div>
                <h3 className="font-semibold text-plum-700 mb-6 flex items-center gap-2">
                  <Send className="w-5 h-5 text-mauve-500" />
                  Contact Information
                </h3>

                <div className="space-y-5">
                  {contactInfo.map((item, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blush-200 to-mauve-200 flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-5 h-5 text-plum-600" />
                      </div>
                      <div>
                        <p className="text-sm text-mauve-500 mb-0.5">{item.label}</p>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="text-plum-700 hover:text-mauve-600 font-medium transition-colors"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-plum-700 font-medium">{item.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social Links & CTA */}
              <div>
                <h3 className="font-semibold text-plum-700 mb-6">Connect With Me</h3>

                <div className="flex gap-4 mb-8">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-2 px-5 py-3 bg-white rounded-xl border border-mauve-200 text-plum-600 font-medium shadow-soft hover:shadow-soft-lg transform hover:-translate-y-0.5 transition-all duration-200 ${social.color}`}
                    >
                      <social.icon className="w-5 h-5" />
                      {social.label}
                    </a>
                  ))}
                </div>

                {/* Call to Action */}
                <div className="bg-gradient-to-br from-blush-100 to-mauve-100 rounded-2xl p-6 border border-mauve-200/50">
                  <p className="text-plum-600 mb-4">
                    Looking for a motivated frontend developer or full-stack intern? Let's connect!
                  </p>
                  <a
                    href="mailto:grizzyy16@gmail.com"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-mauve-500 to-plum-500 text-white font-medium rounded-full shadow-soft hover:shadow-soft-lg transform hover:-translate-y-0.5 transition-all duration-300"
                  >
                    <Mail className="w-4 h-4" />
                    Send Me an Email
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
