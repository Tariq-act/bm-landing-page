import Footer from '@/components/Footer';
import { KeyboardArrowRight } from '@mui/icons-material';
import Image from 'next/image';
import Link from 'next/link';

const PrivacyPolicy = () => {
  return (
    <div className='text-black'>
      <div className='p-2 md:p-10'>
        <div className='flex items-end justify-center text-center text-primary font-bold text-2xl md:text-3xl mb-4 md:mb-8'>
          <Image src='/images/logo.svg' width={50} height={50} alt='logo' />
          <h2 className='ml-2'>Privacy Policy</h2>
        </div>
        <p className='mb-2 md:mb-5 px-5 md:px-20'>
          {`The Company (hereinafter referred as "the Company," "We," "Us," or
          "Bank Master"), place paramount importance on safeguarding the privacy
          and security of your personal information ("Personal Data"). We
          prioritize the establishment and maintenance of your trust.`}
        </p>

        <p className='mb-5 md:mb-10 px-5 md:px-20'>
          {`This Privacy Policy (“Privacy Policy” or "Policy") outlines the
          methods and principles governing our collection, use, processing, and
          disclosure of your Personal Data in connection with your use of our
          services and our website. Please note that this Policy does not apply
          to our partners, each of whom may maintain their own privacy policy.
          In situations where you interact with such partners, we strongly
          encourage you to review the privacy policy applicable to that
          particular site, service or interaction.`}
        </p>

        <p className='mb-5 md:mb-10 px-5 md:px-20 font-medium'>
          By using our services and website, you hereby acknowledge that you
          have read, understood, and agree to the processing of your Personal
          Data in accordance with the terms of this Privacy Policy and our Terms
          of Use.
        </p>

        <h3 className='text-lg font-semibold mb-3 px-5 md:px-20'>
          Collection of Information
        </h3>

        <p className='mb-2 md:mb-5 px-5 md:px-20'>
          Pursuant to this Policy, Bank Master collects and processes the
          undermentioned types of information.
        </p>

        <p className='mb-2 md:mb-5 px-5 md:px-20'>
          <span className='font-semibold'>A. User Provided Information</span>
          <br />
          For utilization of the Bank Master application, it is a prerequisite
          for you to share specific data during the registration phase and for
          your activities on the application. For registration purposes, we may
          collect personal details such as your name, mobile number, email ID,
          date of birth, and Permanent Account Number (PAN).
        </p>

        <ul className='list-disc list-inside mb-5 md:mb-10 px-5 md:px-20 flex flex-col gap-2'>
          <li className='flex items-start'>
            <KeyboardArrowRight className='mt-0.5' />{' '}
            <span className='ml-2'>
              For providing certain services, we may require supplementary
              information, including but not limited to your residential
              address, financial details, credit score, credit/debit card
              specifics, and any other officially valid documents (OVDs).
            </span>
          </li>
          <li className='flex items-start'>
            <KeyboardArrowRight className='mt-0.5' />{' '}
            <span className='ml-2'>
              Not sharing the requisite data may lead to certain features being
              restricted, unavailable, or unusable. For instance, withholding
              your address would render e-commerce transactions involving
              delivery impossible to complete.
            </span>
          </li>
          <li className='flex items-start'>
            <KeyboardArrowRight className='mt-0.5' />{' '}
            <span className='ml-2'>
              Where you opt to provide any device permissions such as contact
              list, photos, camera, location, microphone, SMS, storage, phone
              calls and NFC, Bank Master may retrieve, retain and use the data
              sourced through such device permissions.
            </span>
          </li>
          <li className='flex items-start'>
            <KeyboardArrowRight className='mt-0.5' />{' '}
            <span className='ml-2'>
              {`   You retain the right to revoke the aforementioned access by
              amending access permissions within your device's settings.`}
            </span>
          </li>
        </ul>

        <p className='mb-2 md:mb-5 px-5 md:px-20'>
          <span className='font-semibold'>
            B. Information Generated Through the Use of the Bank Master
            Application
          </span>
          <br />
          Through your utilization of our application or website, we gather
          information such as:
        </p>

        <ul className='list-disc list-inside mb-5 md:mb-10 px-5 md:px-20'>
          <li className='flex items-start'>
            <KeyboardArrowRight className='mt-0.5' />{' '}
            <span className='ml-2'>
              Details pertaining to the services you avail via the Bank Master
              application, your interactions with the application and
              transactional details relating to your usage of our services. This
              encompasses the types of services you request, the amount and
              other related transactional and financial data.
            </span>
          </li>
          <li className='flex items-start'>
            <KeyboardArrowRight className='mt-0.5' />{' '}
            <span className='ml-2'>
              When you access our application or websites, we may log specific
              information including but not limited to your IP address, browser
              type, mobile operating system, the manufacturer and model of your
              mobile device, geolocation, preferred language, access time, and
              duration of use.
            </span>
          </li>
        </ul>

        <p className='mb-2 md:mb-5 px-5 md:px-20'>
          <span className='font-semibold'>
            C. Information We Collect from Third Parties
          </span>
          <br />
          Upon receiving your explicit consent, we may request certain third
          parties to provide information about you to furnish specific services
          and authenticate your information.
        </p>

        <ul className='list-disc list-inside mb-5 md:mb-10 px-5 md:px-20'>
          <li className='flex items-start'>
            <KeyboardArrowRight className='mt-0.5' />{' '}
            <span className='ml-2'>
              To verify your eligibility to use the Bank Master application, you
              will be asked to provide explicit consent for procuring your
              credit information from our partners during the onboarding
              process.
            </span>
          </li>
          <li className='flex items-start'>
            <KeyboardArrowRight className='mt-0.5' />{' '}
            <span className='ml-2'>
              To effectuate a financial transaction, we may disseminate
              financial information provided by you (such as credit card details
              or other payment mode particulars) to authorized third parties,
              for instance, financial institutions, or government authorities
              involved in the fulfillment of the said transactions.
            </span>
          </li>
          <li className='flex items-start'>
            <KeyboardArrowRight className='mt-0.5' />{' '}
            <span className='ml-2'>
              To assist in login and user verification on third-party
              applications.
            </span>
          </li>
        </ul>

        <p className='mb-2 md:mb-5 px-5 md:px-20'>
          {`The Company's access to your email account(s) is facilitated through
          the email provider's access mechanism. If you authorize the Bank
          Master website/app to track your credit card accounts, the Bank Master
          website/app will securely store account particulars for each email
          account, including your sign-in user name and authorization tokens for
          tracked accounts.`}
        </p>

        <p className='mb-2 md:mb-5 px-5 md:px-20'>
          Your explicit consent is required for us to access one or more of your
          email accounts. Please note that your consent to any of the above is
          purely voluntary. You may revoke the access to your email at any time.
        </p>

        <p className='mb-2 md:mb-5 px-5 md:px-20'>
          We may receive information about you that assists us in identifying
          fraud and safety issues.
        </p>

        <h3 className='text-lg font-semibold mb-3 px-5 md:px-20'>
          Utilization of Information
        </h3>

        <p className='mb-2 md:mb-5 px-5 md:px-20'>
          The collected information may be utilized, stored, and processed by us
          to:
        </p>

        <ul className='list-disc list-inside mb-5 md:mb-10 px-5 md:px-20'>
          <li className='flex items-start'>
            <KeyboardArrowRight className='mt-0.5' />{' '}
            <span className='ml-2'>
              Deliver, personalize, measure, and enhance our products and
              services and
            </span>
          </li>
          <li className='flex items-start'>
            <KeyboardArrowRight className='mt-0.5' />{' '}
            <span className='ml-2'>
              establish and sustain a secure and trusted environment on Bank
              Master, including compliance with our legal obligations and
              adherence to our policies.
            </span>
          </li>
        </ul>

        <p className='mb-2 md:mb-5 px-5 md:px-20'>
          <span className='font-semibold'>
            Deliver, Personalize, Measure, and Enhance Services Offered through
            the Bank Master Application
          </span>
          <br />
          We may employ your personal data for the execution of the contract of
          services via the Bank Master application, in legitimate business
          interests, and for regulatory compliance purposes. Your Personal Data
          will be instrumental in creating and updating your account, delivering
          services, processing your transactions, and for essential internal
          functions such as software bug troubleshooting, operational problem
          resolution, data analysis, testing, research, usage, and activity
          trend monitoring, and analysis. Additionally, we may use your Personal
          Data to carry out data analytics to improve the user experience,
          enhance performance, and accomplish desired results.
        </p>

        <p className='mb-2 md:mb-5 px-5 md:px-20'>
          <span className='font-semibold'>
            With your explicit and prior consent, we may use the information
            generated by your usage of our application, excluding data collected
            from other sources such as emails, etc., for promotional purposes.
          </span>{' '}
          This consent is entirely voluntary, and you can opt-out of receiving
          marketing materials from us at any time by following the unsubscribe
          instructions provided, indicating your preference when we call you, or
          directly contacting us. If you wish to remove your contact information
          from all our lists and newsletters, please click on the unsubscribe
          link provided in the emails or send an email request to{' '}
          <Link
            href='mailto:bankmastertech@gmail.com'
            className='text-green-400 hover:text-green-600'
            target='_blank'
          >
            bankmastertech@gmail.com
          </Link>
        </p>

        <div className='mb-2 md:mb-5 px-5 md:px-20'>
          <span className='font-semibold'>
            Establish and Maintain a Secure and Trusted Environment on Bank
            Master
          </span>
          <br />
          <ol className='list-decimal list-inside mb-5 md:mb-10 px-5 flex flex-col gap-4'>
            <li className='flex gap-2'>
              <span className='font-semibold'>1.</span>
              <span>
                We may use your Personal Data, generated as a result of payment
                services availed by you, to ensure compliance of your access and
                use of payment services with our legal obligations (such as
                anti-money laundering regulations). We may share such
                information with our advisors, third-party service partners, and
                providers to facilitate a seamless user experience.
              </span>
            </li>
            <li className='flex gap-2'>
              <span className='font-semibold'>2.</span>
              <span>
                We may employ this information to detect and prevent fraud,
                spam, abuse, security incidents, and other harmful activity.
              </span>
            </li>
            <li className='flex gap-2'>
              <span className='font-semibold'>3.</span>
              <span>
                The information we collect (including recordings of customer
                support calls and chats) may be used to assist you when you
                contact our customer support services, to investigate and
                address your queries, and monitor and improve our customer
                support responses. This information may also be used for staff
                training, quality assurance, or to retain evidence of a specific
                transaction or interaction.
              </span>
            </li>
          </ol>
        </div>

        <h3 className='text-lg font-semibold mb-3 px-5 md:px-20'>Security</h3>

        <p className='mb-2 md:mb-5 px-5 md:px-20'>
          We adopt reasonable safeguards to protect your personal data from
          unauthorized access, use, and disclosure.
          <br /> We are committed to preserving the integrity of your Personal
          Data and maintaining its accuracy. We adopt reasonable physical,
          administrative, and technical safeguards to protect your Personal Data
          from unauthorized access, use, and disclosure. For instance, sensitive
          personal data such as credit card information is encrypted when
          transmitted over the internet. We anonymize your data wherever
          feasible to uphold your privacy.
        </p>

        <p className='mb-2 md:mb-5 px-5 md:px-20'>
          When using the application, you may encounter links to third-party
          websites/apps not affiliated with Bank Master. Please note that Bank
          Master holds no responsibility for their privacy practices, content of
          those other websites, or any acts/omissions by such third parties
          during your transaction with them.
        </p>

        <p className='mb-2 md:mb-5 px-5 md:px-20'>
          If you are a security enthusiast or researcher and detect a potential
          security vulnerability within Bank {`Master's`} products, we urge you
          to responsibly report the issue to us. Kindly submit a detailed bug
          report, including steps required to reproduce the vulnerability, to us
          at{' '}
          <Link
            href='mailto:bankmastertech@gmail.com'
            className='text-green-400 hover:text-green-600'
            target='_blank'
          >
            bankmastertech@gmail.com
          </Link>
          . We pledge our best efforts to investigate and rectify legitimate
          issues within a reasonable timeframe while requesting you not to
          disclose it publicly.
        </p>

        <h3 className='text-lg font-semibold mb-3 px-5 md:px-20'>
          Account Termination
        </h3>

        <p className='mb-2 md:mb-5 px-5 md:px-20'>
          We provide an option to all our users to delete or terminate their
          account, as well as reactivating it when required.
          <br /> We extend an option to all our Users to petition for the
          deletion of their account via the support section of the Bank Master
          application. Upon receiving such a request, all information
          corresponding to the specific account, including but not limited to
          profile details, card data, referral data, statement particulars, will
          be eradicated.
          <br /> There might be scenarios where we may not be able to execute
          account deletion, such as if there exists an outstanding dispute
          through the Bank Master application, transactions suspected to be
          fraudulent, unresolved claims attached to your account.
          Notwithstanding, upon resolution of the obstruction preventing
          deletion, the relevant information is promptly deleted and cannot be
          retrieved thereafter. We may continue to retain certain information if
          deemed necessary for regulatory compliance, legitimate business
          interests like fraud prevention, enhancing user safety and security,
          or to fulfill our legal and contractual obligations.
        </p>

        <p className='mb-2 md:mb-5 px-5 md:px-20'>
          In addition to this, you have the opportunity to request an account
          deactivation/archival. This will provisionally inhibit your access to
          Bank Master application until you forward a re-activation request to{' '}
          <Link
            href='mailto:bankmastertech@gmail.com'
            className='text-green-400 hover:text-green-600'
            target='_blank'
          >
            bankmastertech@gmail.com
          </Link>{' '}
          and successfully reactivate your account.
        </p>

        <h3 className='text-lg font-semibold mb-3 px-5 md:px-20'>
          Access and Queries
        </h3>

        <p className='mb-2 md:mb-5 px-5 md:px-20'>
          We support and encourage all users to contact us for questions,
          concerns, or suggestions relating to our privacy policy.
        </p>
        <p className='mb-2 md:mb-5 px-5 md:px-20'>
          Before we can supply you with any information or rectify any
          inaccuracies, we may ask you to validate your identity and provide
          additional details to confirm your identity and facilitate our
          response to your request. We commit to reaching out to you within 30
          days of your request. For questions, concerns, or suggestions relating
          to our Privacy Policy, we can be contacted via the details at{' '}
          <Link
            href='mailto:bankmastertech@gmail.com'
            className='text-green-400 hover:text-green-600'
            target='_blank'
          >
            bankmastertech@gmail.com
          </Link>
        </p>

        <h3 className='text-lg font-semibold mb-3 px-5 md:px-20'>
          Modifications to Privacy Policy
        </h3>

        <p className='mb-2 md:mb-5 px-5 md:px-20'>
          Bank Master reserves the right to alter, modify and amend this policy
          at any point of time, taking effect immediately after updating.
        </p>
        <p className='mb-2 md:mb-5 px-5 md:px-20'>
          Bank Master reserves the right to modify this policy at its discretion
          from time to time. Any amendments shall take effect immediately upon
          posting the revised Privacy Policy. We advise you to periodically
          review this page for the most recent information on our privacy
          practices. Your usage of the Bank Master application shall be deemed
          to be consent to the Privacy Policy as modified from time to time.
        </p>

        <h3 className='text-lg font-semibold mb-3 px-5 md:px-20'>
          Data Storage
        </h3>

        <p className='mb-2 md:mb-5 px-5 md:px-20'>
          All data will be housed in servers located within India.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
