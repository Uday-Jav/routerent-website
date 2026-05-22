import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import Navbar from './Navbar';
import Footer from './Footer';

const legalContent = {
  terms: {
    eyebrow: 'Terms of Service',
    title: 'Rules for using Routerent responsibly',
    lastUpdated: 'May 22, 2026',
    intro:
      'Welcome to Routerent. By accessing or using our application, website, or services (collectively, the "Platform"), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use the Platform.',
    sections: [
      {
        heading: '1. Eligibility and Accounts',
        items: [
          {
            label: 'Account Responsibility',
            text: 'You must provide accurate, current, and complete information during the registration process and keep your account details updated. You are entirely responsible for safeguarding your password and for any activity that occurs under your account.',
          },
          {
            label: 'Account Security',
            text: 'You agree to notify us immediately of any unauthorized use of your account.',
          },
          {
            label: 'Suspension and Termination',
            text: 'We reserve the right to limit, suspend, or permanently terminate your account and access to the Platform if we detect misuse, fraudulent activity, or the provision of false information.',
          },
        ],
      },
      {
        heading: '2. Permitted Platform Use',
        items: [
          {
            label: 'Purpose',
            text: 'Routerent is a community-driven marketplace designed solely for legitimate item rentals, co-traveling/ride-sharing coordination, and related community interactions.',
          },
        ],
        bullets: [
          'Interfere with, disrupt, or attempt to gain unauthorized access to the Platform\'s servers, networks, or source code.',
          'Use the Platform for any unlawful, deceptive, or malicious purposes.',
          'Scrape, copy, or replicate Platform content without explicit permission.',
        ],
        bulletLabel: 'Prohibited Conduct: You agree not to:',
      },
      {
        heading: '3. Listings, Rentals, and Ride Coordination',
        items: [
          {
            label: 'User Responsibility',
            text: 'All listings, item descriptions, rental prices, route details, and availability are generated entirely by users. Routerent does not verify the absolute accuracy or quality of user-submitted content.',
          },
          {
            label: 'Rental Conditions',
            text: 'Item owners are responsible for ensuring that listed items are safe, functional, and accurately described. Renters are responsible for returning items on time and in the same condition they received them, normal wear and tear excepted.',
          },
          {
            label: 'Ride-Sharing Coordination',
            text: 'The Platform allows users to coordinate shared travel. Routerent is not a transportation provider. Users are solely responsible for coordinating pickup spots, timings, and communicating any changes or cancellations directly with one another.',
          },
        ],
      },
      {
        heading: '4. Fees, Payments, and Disputes',
        items: [
          {
            label: 'Peer-to-Peer Transactions',
            text: 'Any financial agreements, cash exchanges, or digital payments made in connection with rentals or rides are strictly between the participating users.',
          },
          {
            label: 'Dispute Disclaimer',
            text: 'Routerent acts strictly as a facilitator to connect users. We do not handle payment disputes, security deposits, damage claims, or refunds. Users agree to resolve any financial or transactional disagreements amicably between themselves.',
          },
        ],
      },
      {
        heading: '5. Safety, Conduct, and Legal Compliance',
        items: [
          {
            label: 'Respectful Community',
            text: 'You agree to act respectfully, safely, and lawfully in all real-world interactions arranged through the Platform. Abusive, harassing, unsafe, or discriminatory behavior will result in an immediate ban.',
          },
          {
            label: 'Vehicles and Driving Laws',
            text: 'Users offering rides must possess a valid driver\'s license, proper vehicle registration, and the legally required insurance coverage. Drivers must strictly adhere to all local traffic laws and safety regulations.',
          },
          {
            label: 'Identity and Verification',
            text: 'While Routerent requires accurate account details, we cannot guarantee the true identity, background, or safety of any user. Users are strongly advised to exercise personal caution, meet in well-lit public spaces, and prioritize their personal safety when interacting in the real world.',
          },
        ],
      },
      {
        heading: '6. Modifications to the Service and Terms',
        items: [
          {
            label: 'Product Evolution',
            text: 'We continuously improve Routerent. We reserve the right to update, modify, pause, or discontinue features or parts of the Platform at any time without prior notice.',
          },
          {
            label: 'Amendments',
            text: 'We may update these Terms of Service from time to time. Your continued use of the Platform after changes are published constitutes your explicit acceptance of the revised terms.',
          },
        ],
      },
      {
        heading: '7. Disclaimers and Limitation of Liability',
        items: [
          {
            label: '"As-Is" Provision',
            text: 'Routerent is provided on an "as-is" and "as-available" basis. To the maximum extent permitted by law, we disclaim all warranties, express or implied, including fitness for a particular purpose or non-infringement.',
          },
          {
            label: 'Limitation of Liability',
            text: 'Routerent, its creators, and operators shall not be liable for any indirect, incidental, special, or consequential damages resulting from your use of the Platform. This includes, but is not limited to, theft, loss of property, damage to items, personal injury, vehicular accidents, or financial losses arising from real-world interactions arranged via the Platform. All real-world actions are taken entirely at your own risk.',
          },
        ],
      },
    ],
  },
  privacy: {
    eyebrow: 'Privacy Policy',
    title: 'How Routerent handles your information',
    lastUpdated: 'May 22, 2026',
    intro:
      'At Routerent, we value your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application and related services (the "Platform"). By using the Platform, you agree to the collection and use of information in accordance with this policy.',
    sections: [
      {
        heading: '1. Information We Collect',
        items: [
          {
            label: 'Account and Profile Information',
            text: 'Information you provide when creating an account, such as your name, email address, phone number, profile picture, and campus/community affiliation.',
          },
          {
            label: 'Transaction and Activity Data',
            text: 'Details regarding the items you list for rent, rental requests, ride offers, co-traveling routes, timings, and communication history between users within the Platform.',
          },
          {
            label: 'Location Data',
            text: 'With your explicit permission, we may collect precise or approximate location data from your mobile device. This is strictly used to show you nearby rental items, calculate travel routes, and match you with nearby riders or drivers. You can enable or disable location tracking at any time via your device settings.',
          },
          {
            label: 'Technical and Usage Data',
            text: 'Device-specific details (IP address, device model, operating system) and basic usage analytics (how you navigate the app) to monitor security, fix bugs, and improve performance.',
          },
        ],
      },
      {
        heading: '2. How We Use Your Information',
        paragraphs: [
          'We use the collected data for purposes including, but not limited to:',
        ],
        bullets: [
          'Operating, maintaining, and optimizing the Routerent Platform.',
          'Facilitating user-to-user connections for item rentals and shared travel.',
          'Verifying accounts, preventing spam, detecting fraudulent listings, and ensuring community safety.',
          'Sending you essential system notifications, booking updates, and security alerts.',
        ],
      },
      {
        heading: '3. How Data is Shared and Displayed',
        paragraphs: [
          'We do not sell your personal information to third parties. Your data is only shared in the following scenarios:',
        ],
        items: [
          {
            label: 'With Other Users (Peer-to-Peer Visibility)',
            text: 'To make the marketplace work, certain profile details (such as your name, profile picture, approximate location, and public listings/ride routes) are visible to other Routerent users. Once a rental or ride is confirmed, we may share necessary contact information (like a phone number) to help you coordinate the real-world meetup.',
          },
          {
            label: 'With Trusted Service Providers',
            text: 'We may share limited data with secure, third-party vendors who provide essential backend infrastructure, such as database hosting, user authentication, or analytics tools. These providers are contractually obligated to protect your data.',
          },
          {
            label: 'Legal Requirements',
            text: 'We may disclose your information if required to do so by law or in response to valid requests by public authorities (e.g., a court or government agency).',
          },
        ],
      },
      {
        heading: '4. Data Security and Retention',
        items: [
          {
            label: 'Security',
            text: 'We implement industry-standard technical and organizational security measures to protect your personal data against unauthorized access, loss, or alteration. However, no electronic transmission or storage method is 100% secure.',
          },
          {
            label: 'Retention',
            text: 'We retain your personal information only for as long as necessary to fulfill the purposes outlined in this policy, resolve user disputes, prevent fraud, and comply with legal obligations.',
          },
        ],
      },
      {
        heading: '5. Your Rights and Choices',
        paragraphs: [
          'You retain control over your data. Depending on your platform interface, you can:',
        ],
        items: [
          {
            label: 'Access and Update',
            text: 'Review and edit your account profile information directly within the app settings.',
          },
          {
            label: 'Location Controls',
            text: 'Grant or revoke the app\'s permission to access your device\'s GPS location through your phone\'s system settings.',
          },
          {
            label: 'Account and Data Deletion',
            text: 'You have the right to request the deletion of your account and associated personal data at any time. You can initiate this request within the app settings or by contacting support. Upon request, we will delete your personal data, except for information we are legally required or permitted to retain for security and fraud prevention.',
          },
        ],
      },
      {
        heading: '6. Contact Us',
        paragraphs: [
          'If you have any questions, concerns, or requests regarding this Privacy Policy or how your data is handled, please reach out to us through the official Routerent support channel on our application release page.',
        ],
      },
    ],
  },
};

export default function LegalPage({ type }) {
  const content = legalContent[type] ?? legalContent.privacy;

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', 'dark');
  }, []);

  return (
    <>
      <div className="bg-glow"></div>
      <Navbar />
      <main style={{ padding: '8rem 0 5rem', position: 'relative', zIndex: 1 }}>
        <section className="section" style={{ paddingTop: '3rem', paddingBottom: '3rem' }}>
          <div className="container" style={{ maxWidth: '960px' }}>
            <div
              className="glass"
              style={{
                padding: '3rem',
                background: 'linear-gradient(180deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 100%)',
              }}
            >
              <p
                style={{
                  color: 'var(--accent-color)',
                  fontSize: '0.9rem',
                  fontWeight: 700,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  marginBottom: '1rem',
                }}
              >
                {content.eyebrow}
              </p>
              <h1
                style={{
                  color: 'var(--text-heading)',
                  fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                  lineHeight: 1.05,
                  letterSpacing: '-0.04em',
                  marginBottom: '1rem',
                }}
              >
                {content.title}
              </h1>
              <p
                style={{
                  color: 'var(--text-color)',
                  fontSize: '1.1rem',
                  maxWidth: '760px',
                  marginBottom: '1rem',
                }}
              >
                {content.intro}
              </p>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
                Last updated: {content.lastUpdated}
              </p>
            </div>
          </div>
        </section>

        <section className="section" style={{ paddingTop: '1rem' }}>
          <div className="container" style={{ maxWidth: '960px' }}>
            <div style={{ display: 'grid', gap: '1.5rem' }}>
              {content.sections.map((section) => (
                <article
                  key={section.heading}
                  className="glass"
                  style={{
                    padding: '2rem',
                    background: 'rgba(255,255,255,0.03)',
                  }}
                >
                  <h2
                    style={{
                      color: 'var(--text-heading)',
                      fontSize: '1.35rem',
                      marginBottom: '1rem',
                    }}
                  >
                    {section.heading}
                  </h2>

                  {section.paragraphs?.map((paragraph) => (
                    <p
                      key={paragraph}
                      style={{ color: 'var(--text-color)', margin: '0 0 1rem 0' }}
                    >
                      {paragraph}
                    </p>
                  ))}

                  {section.items?.map((item) => (
                    <p
                      key={item.label}
                      style={{ color: 'var(--text-color)', margin: '0 0 1rem 0' }}
                    >
                      <strong style={{ color: 'var(--text-heading)' }}>{item.label}:</strong>{' '}
                      {item.text}
                    </p>
                  ))}

                  {section.bulletLabel ? (
                    <p style={{ color: 'var(--text-color)', margin: '0 0 1rem 0' }}>
                      <strong style={{ color: 'var(--text-heading)' }}>{section.bulletLabel}</strong>
                    </p>
                  ) : null}

                  {section.bullets ? (
                    <ul
                      style={{
                        color: 'var(--text-color)',
                        paddingLeft: '1.25rem',
                        margin: 0,
                        display: 'grid',
                        gap: '0.6rem',
                      }}
                    >
                      {section.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  ) : null}
                </article>
              ))}
            </div>

            <div style={{ marginTop: '2rem', display: 'flex', justifyContent: 'center' }}>
              <Link to="/" className="btn secondary-btn">
                Back to Home
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
