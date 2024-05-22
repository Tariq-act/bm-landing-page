import Image from 'next/image';
import Link from 'next/link';
import Footer from '@/components/Footer';
// import { KeyboardArrowRight } from '@mui/icons-material';

const TermsAndConditions = () => {
  return (
    <div className='text-gray-600'>
      <div className='p-2 md:p-10'>
        <div className='flex items-end justify-center text-center text-primary font-bold text-2xl md:text-3xl '>
          <Image src='/images/logo.svg' width={50} height={50} alt='logo' />
          <h2 className=''>TERMS OF SERVICE AGREEMENT</h2>
        </div>
        <div className='prose md:prose-lg mt-5 px-10 md:px-16 '>
          <p className='text-black'>
            PLEASE READ THIS TERMS OF SERVICE AGREEMENT CAREFULLY. BY USING THIS
            WEBSITE OR ORDERING SERVICES FROM THIS WEBSITE YOU AGREE TO BE BOUND
            BY ALL OF THE TERMS AND CONDITIONS OF THIS AGREEMENT.
          </p>
          <p className='my-6'>
            This Terms of Service Agreement {`(the "Agreement")`} governs your
            use of this website, https://www.bankmaster.in/ {`(the "Website")`},
            Bank Master {`("Business Name")`} offer of services for on this
            Website. This Agreement includes, and incorporates by this
            reference, the policies and guidelines referenced below. Bank Master
            reserves the right to change or revise the terms and conditions of
            this Agreement at any time by posting any changes or a revised
            Agreement on this Website. Bank Master encourages you to review this
            Agreement whenever you visit the Website to make sure that you
            understand the terms and conditions governing use of the Website.
            This Agreement does not alter in any way the terms or conditions of
            any other written agreement you may have with Bank Master for other
            services. If you do not agree to this Agreement (including any
            referenced policies or guidelines), please immediately terminate
            your use of the Website.
          </p>

          <h3 className='mb-3 font-bold  text-2xl text-black'>1. SERVICES</h3>
          <div className='flex flex-col gap-4'>
            <p>
              <span className='font-bold'>Terms of Offer:</span> This Website
              offers for sale certain services {`(the "Services")`}. By placing
              an order for Services through this Website, you agree to the terms
              set forth in this Agreement.
            </p>
            <p>
              <span className='font-bold'>Customer Solicitation:</span> Unless
              you notify our direct Bank Master sales reps, while they are
              calling you, of your desire to opt out from further direct company
              communications and solicitations, you are agreeing to continue to
              receive further emails and call solicitations Bank Master and its
              designated in house call team(s).
            </p>
            <p>
              <span className='font-bold'>Opt Out Procedure:</span> We provide 3
              easy ways to opt out of from future solicitations. 1. You may use
              the opt out link found in any email solicitation that you may
              receive. 2. You may also choose to opt out, via sending your email
              address to: info@bankmaster.in 3. You may send a written remove
              request to leads@bankmaster.in.
            </p>
            <p>
              <span className='font-bold'>Proprietary Rights:</span> Bank Master
              has proprietary rights and trade secrets in the Services. You may
              not copy, reproduce, resell or redistribute any service of Bank
              Master. Bank Master also has rights to all trademarks and trade
              dress and specific layouts of this webpage, including calls to
              action, text placement, images and other information.
            </p>
            <p>
              <span className='font-bold'>GST:</span> If you purchase any
              Services, you will be responsible for paying any applicable GST.
            </p>
          </div>

          <h3 className='my-3 font-bold text-2xl text-black'>2. WEBSITE</h3>
          <div className='flex flex-col gap-4'>
            <p>
              <span className='font-bold'>
                Content; Intellectual Property; Third Party Links:
              </span>{' '}
              In addition to making Services available, this Website also offers
              information and marketing materials. Bank Master does not always
              create the information offered on this Website; instead the
              information is often gathered from other sources. To the extent
              that Bank Master does create the content on this Website, such
              content is protected by intellectual property laws of India.
              <br />
              <br />
              Unauthorized use of the material may violate copyright, trademark,
              and/or other laws. You acknowledge that your use of the content on
              this Website is for personal, noncommercial use. Any links to
              third-party websites are provided solely as a convenience to you.
              Bank Master does not endorse the contents on any such third-party
              websites. Bank Master is not responsible for the content of or any
              damage that may result from your access to or reliance on these
              third-party websites. If you link to third-party websites, you do
              so at your own risk.
            </p>
            <p>
              <span className='font-bold'>Use of Website:</span> Bank Master is
              not responsible for any damages resulting from use of this website
              by anyone. You will not use the Website for illegal purposes. You
              will (1) abide by all applicable local, state, national, and
              international laws and regulations in your use of the Website
              (including laws regarding intellectual property), (2) not
              interfere with or disrupt the use and enjoyment of the Website by
              other users, (3) not resell material on the Website, (4) not
              engage, directly or indirectly, in transmission of{` "spam"`},
              chain letters, junk mail or any other type of unsolicited
              communication, and (5) not defame, harass, abuse, or disrupt other
              users of the Website.
            </p>
            <p>
              <span className='font-bold'>License:</span> By using this Website,
              you are granted a limited, non-exclusive, non-transferable right
              to use the content and materials on the Website in connection with
              your normal, noncommercial, use of the Website. You may not copy,
              reproduce, transmit, distribute, or create derivative works of
              such content or information without express written authorization
              from Bank Master or the applicable third party (if third party
              content is at issue).
            </p>
            <p>
              <span className='font-bold'>Posting:</span> By posting, storing,
              or transmitting any content on the Website, you hereby grant Bank
              Master a perpetual, worldwide, non-exclusive, royalty-free,
              assignable, right and license to use, copy, display, perform,
              create derivative works from, distribute, have distributed,
              transmit and assign such content in any form, in all media now
              known or hereinafter created, anywhere in the world. Bank Master
              does not have the ability to control the nature of the
              user-generated content offered through the Website. You are solely
              responsible for your interactions with other users of the Website
              and any content you post. Bank Master is not liable for any damage
              or harm resulting from any posts by or interactions between users.
              Bank Master reserves the right, but has no obligation, to monitor
              interactions between and among users of the Website and to remove
              any content Bank Master deems objectionable, in {`Bank Master's`}{' '}
              sole discretion.
            </p>
          </div>

          <h3 className='mb-3 font-bold text-2xl text-black'>
            3. DISCLAIMER OF WARRANTIES
          </h3>
          <p>
            {`  YOUR USE OF THIS WEBSITE AND/OR SERVICES ARE AT YOUR SOLE RISK. THE
            WEBSITE AND SERVICES ARE OFFERED ON AN "AS IS" AND "AS AVAILABLE"
            BASIS. BANK MASTER EXPRESSLY DISCLAIMS ALL WARRANTIES OF ANY KIND,
            WHETHER EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, IMPLIED
            WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
            NON-INFRINGEMENT WITH RESPECT TO THE SERVICES OR WEBSITE CONTENT, OR
            ANY RELIANCE UPON OR USE OF THE WEBSITE CONTENT OR SERVICES.
            ("SERVICES" INCLUDE TRIAL SERVICES.)`}
          </p>
          <ul className='list-none list-inside flex flex-col gap-4 my-4'>
            <li>
              THAT THE INFORMATION PROVIDED ON THIS WEBSITE IS ACCURATE,
              RELIABLE, COMPLETE, OR TIMELY.
            </li>
            <li>
              THAT THE LINKS TO THIRD-PARTY WEBSITES ARE TO INFORMATION THAT IS
              ACCURATE, RELIABLE, COMPLETE, OR TIMELY.
            </li>
            <li>
              NO ADVICE OR INFORMATION, WHETHER ORAL OR WRITTEN, OBTAINED BY YOU
              FROM THIS WEBSITE WILL CREATE ANY WARRANTY NOT EXPRESSLY STATED
              HEREIN.
            </li>
            <li>
              AS TO THE RESULTS THAT MAY BE OBTAINED FROM THE USE OF THE
              SERVICES OR THAT DEFECTS IN SERVICES WILL BE CORRECTED.
            </li>
            <li>
              REGARDING ANY SERVICES PURCHASED OR OBTAINED THROUGH THE WEBSITE.
            </li>
          </ul>
          <p className='my-4'>
            SOME JURISDICTIONS DO NOT ALLOW THE EXCLUSION OF CERTAIN WARRANTIES,
            SO SOME OF THE ABOVE EXCLUSIONS MAY NOT APPLY TO YOU.
          </p>

          <h3 className='mb-3 font-bold text-2xl text-black'>
            4. LIMITATION OF LIABILITY
          </h3>
          <div className='flex flex-col gap-4 my-3'>
            <p>
              BANK MASTER ENTIRE LIABILITY, AND YOUR EXCLUSIVE REMEDY, IN LAW,
              IN EQUITY, OR OTHERWISE, WITH RESPECT TO THE WEBSITE CONTENT AND
              SERVICES AND/OR FOR ANY BREACH OF THIS AGREEMENT IS SOLELY LIMITED
              TO THE AMOUNT YOU PAID, LESS SHIPPING AND HANDLING, FOR SERVICES
              PURCHASED VIA THE WEBSITE.
            </p>
            <p>
              BANK MASTER WILL NOT BE LIABLE FOR ANY DIRECT, INDIRECT,
              INCIDENTAL, SPECIAL OR CONSEQUENTIAL DAMAGES IN CONNECTION WITH
              THIS AGREEMENT OR THE SERVICES IN ANY MANNER, INCLUDING
              LIABILITIES RESULTING FROM (1) THE USE OR THE INABILITY TO USE THE
              WEBSITE CONTENT OR SERVICES; (2) THE COST OF PROCURING SUBSTITUTE
              SERVICES OR CONTENT; (3) ANY SERVICES PURCHASED OR OBTAINED OR
              TRANSACTIONS ENTERED INTO THROUGH THE WEBSITE; OR (4) ANY LOST
              PROFITS YOU ALLEGE.
            </p>
            <p>
              SOME JURISDICTIONS DO NOT ALLOW THE LIMITATION OR EXCLUSION OF
              LIABILITY FOR INCIDENTAL OR CONSEQUENTIAL DAMAGES SO SOME OF THE
              ABOVE LIMITATIONS MAY NOT APPLY TO YOU.
            </p>
          </div>

          <h3 className='my-3 font-bold text-2xl text-black'>
            5. INDEMNIFICATION
          </h3>
          <p>
            You will release, indemnify, defend and hold harmless Bank Master,
            and any of its contractors, agents, employees, officers, directors,
            shareholders, affiliates and assigns from all liabilities, claims,
            damages, costs and expenses, including reasonable {`attorney's`}
            fees and expenses, of third parties relating to or arising out of
            (1) this Agreement or the breach of your warranties, representations
            and obligations under this Agreement; (2) the Website content or
            your use of the Website content; (3) the Services or your use of the
            Services (including Trial Services); (4) any intellectual property
            or other proprietary right of any person or entity; (5) your
            violation of any provision of this Agreement; or (6) any information
            or data you supplied to Bank Master. When Bank Master is threatened
            with suit or sued by a third party, Bank Master may seek written
            assurances from you concerning your promise to indemnify Bank
            Master; your failure to provide such assurances may be considered by
            Bank Master to be a material breach of this Agreement. Bank Master
            will have the right to participate in any defense by you of a
            third-party claim related to your use of any of the Website content
            or Services, with counsel of Bank {`Master's`} choice at its
            expense. Bank Master will reasonably cooperate in any defense by you
            of a third-party claim at your request and expense. You will have
            sole responsibility to defend Bank Master against any claim, but you
            must receive Bank {`Master's`} prior written consent regarding any
            related settlement. The terms of this provision will survive any
            termination or cancellation of this Agreement or your use of the
            Website or Services.
          </p>

          <h3 className='my-3 font-bold text-2xl text-black'>6. PRIVACY</h3>
          <p>
            Bank Master believes strongly in protecting user privacy and
            providing you with notice of Bank {`Master's`} use of data.
          </p>

          <h3 className='my-3 font-bold text-2xl text-black'>
            7. AGREEMENT TO BE BOUND
          </h3>
          <p>
            By using this Website or ordering Services, you acknowledge that you
            have read and agree to be bound by this Agreement and all terms and
            conditions on this Website.
          </p>

          <h3 className='my-3 font-bold text-2xl text-black '>8. GENERAL</h3>
          <div className='flex flex-col gap-4 mb-4'>
            <p>
              <span className='font-bold'>Force Majeure:</span> Bank Master will
              not be deemed in default hereunder or held responsible for any
              cessation, interruption or delay in the performance of its
              obligations hereunder due to earthquake, flood, fire, storm,
              natural disaster, act of God, pandemic, war, terrorism, armed
              conflict, labor strike, lockout, or boycott.
            </p>
            <p>
              <span className='font-bold'>Cessation of Operation:</span> Bank
              Master may at any time, in its sole discretion and without advance
              notice to you, cease operation of the Website and distribution of
              the Services.
            </p>
            <p>
              <span className='font-bold'>Entire Agreement:</span> This
              Agreement comprises the entire agreement between you and Bank
              Master and supersedes any prior agreements pertaining to the
              subject matter contained herein.
            </p>
            <p>
              <span className='font-bold'>Effect of Waiver:</span> The failure
              of Bank Master to exercise or enforce any right or provision of
              this Agreement will not constitute a waiver of such right or
              provision. If any provision of this Agreement is found by a court
              of competent jurisdiction to be invalid, the parties nevertheless
              agree that the court should endeavor to give effect to the{' '}
              {`parties'`} intentions as reflected in the provision, and the
              other provisions of this Agreement remain in full force and
              effect.
            </p>
            <p>
              <span className='font-bold'>Governing Law; Jurisdiction:</span>{' '}
              This Website originates from Hyderabad, Telangana. This Agreement
              will be governed by the laws of the State of India without regard
              to its conflict of law principles to the contrary. Neither you nor
              Bank Master will commence or prosecute any suit, proceeding or
              claim to enforce the provisions of this Agreement, to recover
              damages for breach of or default of this Agreement, or otherwise
              arising under or by reason of this Agreement. By using this
              Website or ordering Services, you consent to the jurisdiction and
              venue of such courts in connection with any action, suit,
              proceeding or claim arising under or by reason of this Agreement.
              You hereby waive any right to trial by jury arising out of this
              Agreement and any related documents.
            </p>
            <p>
              <span className='font-bold'>Statute of Limitation:</span> You
              agree that regardless of any statute or law to the contrary, any
              claim or cause of action arising out of or related to use of the
              Website or Services or this Agreement must be filed within one (1)
              year after such claim or cause of action arose or be forever
              barred.
            </p>
            <p>
              <span className='font-bold'>Waiver of Class Action Rights:</span>{' '}
              BY ENTERING INTO THIS AGREEMENT, YOU HEREBY IRREVOCABLY WAIVE ANY
              RIGHT YOU MAY HAVE TO JOIN CLAIMS WITH THOSE OF OTHER IN THE FORM
              OF A CLASS ACTION OR SIMILAR PROCEDURAL DEVICE. ANY CLAIMS ARISING
              OUT OF, RELATING TO, OR CONNECTION WITH THIS AGREEMENT MUST BE
              ASSERTED INDIVIDUALLY.
            </p>
            <p>
              <span className='font-bold'>Termination:</span> Bank Master
              reserves the right to terminate your access to the Website if it
              reasonably believes, in its sole discretion, that you have
              breached any of the terms and conditions of this Agreement.
              Following termination, you will not be permitted to use the
              Website and Bank Master may, in its sole discretion and without
              advance notice to you, cancel any outstanding orders for Services.
              If your access to the Website is terminated, Bank Master reserves
              the right to exercise whatever means it deems necessary to prevent
              unauthorized access of the Website. This Agreement will survive
              indefinitely unless and until Bank Master chooses, in its sole
              discretion and without advance notice to you, to terminate it.
            </p>
            <p>
              <span className='font-bold'>Domestic Use:</span> Bank Master makes
              no representation that the Website or Services are appropriate or
              available for use in locations outside India. Users who access the
              Website from outside India do so at their own risk and initiative
              and must bear all responsibility for compliance with any
              applicable local laws. Assignment. You may not assign your rights
              and obligations under this Agreement to anyone. Bank Master may
              assign its rights and obligations under this Agreement in its sole
              discretion and without advance notice to you.
            </p>

            <p className='mt-5'>
              BY USING THIS WEBSITE OR ORDERING SERVICES FROM THIS WEBSITE YOU
              AGREE TO BE BOUND BY ALL OF THE TERMS AND CONDITIONS OF THIS
              AGREEMENT.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TermsAndConditions;
