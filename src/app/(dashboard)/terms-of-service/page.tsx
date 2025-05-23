"use client";

import React from "react";

const TermsOfService = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 py-10">
      <h1 className="text-4xl font-extrabold text-gray-900 mb-8">Terms of Service</h1>
      <p className="text-sm text-gray-500 mb-10">Last updated: Jan 12, 2025</p>

      <div className="mb-12">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Table of Contents</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
        {[...Array(30)].map((_, index) => (
        <a
          key={index}
          href={`#section-${index + 1}`}
          className="text-gray-700 hover:text-blue-500 transition-colors"
        >
          {index + 1}. {getTableOfContentsTitle(index + 1)}
        </a>
        ))}
      </div>
      </div>

      <div className="space-y-16">
      {[...Array(30)].map((_, index) => (
        <section
        key={index}
        id={`section-${index + 1}`}
        className="scroll-mt-24"
        >
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          {index + 1}. {getTableOfContentsTitle(index + 1)}
        </h2>
        <div className="prose prose-gray max-w-none">
          {getSectionContent(index + 1)}
        </div>
        </section>
      ))}
      </div>

      <div className="mt-16 p-8 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Contact Us</h2>
      <p className="text-gray-700 mb-4">
        In order to resolve a complaint regarding the Site or to receive
        further information regarding use of the Site, please contact us at:
      </p>
      <div className="space-y-2">
        <p className="font-semibold text-gray-800">SwaLay Digital</p>
        <p className="text-gray-700">TC HO, C-4, 4/19, Sector-2</p>
        <p className="text-gray-700">Rajender Nagar, Sahibabad</p>
        <p className="text-gray-700">Ghaziabad, Uttar Pradesh 201005</p>
        <p className="text-gray-700">India</p>
        <p className="text-gray-700">Phone: (+91)7303630201</p>
        <p className="text-gray-700">Email: swalay.care@talantoncore.in</p>
      </div>
      </div>
    </div>
  );
};

// Helper function to get section titles
function getTableOfContentsTitle(index: number): string {
  const titles = [
    "AGREEMENT TO TERMS",
    "INTELLECTUAL PROPERTY RIGHTS",
    "USER REPRESENTATIONS",
    "USER REGISTRATION",
    "PRODUCTS",
    "PURCHASES AND PAYMENT",
    "RETURN/REFUNDS POLICY",
    "PROHIBITED ACTIVITIES",
    "USER-GENERATED CONTRIBUTIONS",
    "CONTRIBUTION LICENSE",
    "GUIDELINES FOR REVIEWS",
    "SOCIAL MEDIA",
    "SUBMISSIONS",
    "THIRD-PARTY WEBSITE AND CONTENT",
    "SITE MANAGEMENT",
    "PRIVACY POLICY",
    "DIGITAL MILLENNIUM COPYRIGHT ACT (DMCA) NOTICE AND POLICY",
    "TERM AND TERMINATION",
    "MODIFICATIONS AND INTERRUPTIONS",
    "GOVERNING LAW",
    "DISPUTE RESOLUTION",
    "CORRECTIONS",
    "DISCLAIMER",
    "LIMITATIONS OF LIABILITY",
    "INDEMNIFICATION",
    "USER DATA",
    "ELECTRONIC COMMUNICATIONS, TRANSACTIONS, AND SIGNATURES",
    "CALIFORNIA USERS AND RESIDENTS",
    "MISCELLANEOUS",
    "CONTACT US"
  ];
  return titles[index - 1] || "";
}

// Helper function to get section content
function getSectionContent(index: number): JSX.Element {
  switch (index) {
    case 1: // AGREEMENT TO TERMS
      return (
        <div className="text-gray-700 space-y-4">
          <p>
            These Terms of Use constitute a legally binding agreement made between you, whether personally or on behalf of an entity (&quot;you&quot;) and SwaLay Digital, doing business as SwaLay (&quot;SwaLay&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;), concerning your access to and use of the https://swalay.in or https://swalay.talantoncore.in website as well as any other media form, media channel, mobile website or mobile application related, linked, or otherwise connected thereto (collectively, the &quot;Site&quot;). We are registered in India and have our registered office at TalantonCore HO, C-4, 4/19, Sector-2, Ghaziabad, Uttar Pradesh 201005. You agree that by accessing the Site, you have read, understood, and agreed to be bound by all of these Terms of Use. IF YOU DO NOT AGREE WITH ALL OF THESE TERMS OF USE, THEN YOU ARE EXPRESSLY PROHIBITED FROM USING THE SITE AND YOU MUST DISCONTINUE USE IMMEDIATELY.
          </p>
          
          <p>
            Supplemental terms and conditions or documents that may be posted on the Site from time to time are hereby expressly incorporated herein by reference. We reserve the right, in our sole discretion, to make changes or modifications to these Terms of Use from time to time. We will alert you about any changes by updating the &quot;Last updated&quot; date of these Terms of Use, and you waive any right to receive specific notice of each such change. Please ensure that you check the applicable Terms every time you use our Site so that you understand which Terms apply. You will be subject to, and will be deemed to have been made aware of and to have accepted, the changes in any revised Terms of Use by your continued use of the Site after the date such revised Terms of Use are posted.
          </p>
          
          <p>
            The information provided on the Site is not intended for distribution to or use by any person or entity in any jurisdiction or country where such distribution or use would be contrary to law or regulation or which would subject us to any registration requirement within such jurisdiction or country. Accordingly, those persons who choose to access the Site from other locations do so on their own initiative and are solely responsible for compliance with local laws, if and to the extent local laws are applicable.
          </p>
          
          <p>
            The Site is not tailored to comply with industry-specific regulations (Health Insurance Portability and Accountability Act (HIPAA), Federal Information Security Management Act (FISMA), etc.), so if your interactions would be subjected to such laws, you may not use this Site. You may not use the Site in a way that would violate the Gramm-Leach-Bliley Act (GLBA).
          </p>
          
          <p>
            The Site is intended for users who are at least 13 years of age. All users who are minors in the jurisdiction in which they reside (generally under the age of 18) must have the permission of, and be directly supervised by, their parent or guardian to use the Site. If you are a minor, you must have your parent or guardian read and agree to these Terms of Use prior to you using the Site.
          </p>
        </div>
      );
    
    case 2: // INTELLECTUAL PROPERTY RIGHTS
      return (
        <div className="text-gray-700 space-y-4">
          <p>
            Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the &quot;Content&quot;) and the trademarks, service marks, and logos contained therein (the &quot;Marks&quot;) are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws and various other intellectual property rights and unfair competition laws of the United States, international copyright laws, and international conventions. The Content and the Marks are provided on the Site &quot;AS IS&quot; for your information and personal use only. Except as expressly provided in these Terms of Use, no part of the Site and no Content or Marks may be copied, reproduced, aggregated, republished, uploaded, posted, publicly displayed, encoded, translated, transmitted, distributed, sold, licensed, or otherwise exploited for any commercial purpose whatsoever, without our express prior written permission.
          </p>
          
          <p>
            Provided that you are eligible to use the Site, you are granted a limited license to access and use the Site and to download or print a copy of any portion of the Content to which you have properly gained access solely for your personal, non-commercial use. We reserve all rights not expressly granted to you in and to the Site, the Content, and the Marks.
          </p>
        </div>
      );

    case 3: // USER REPRESENTATIONS
      return (
        <div className="text-gray-700 space-y-4">
          <p>
            By using the Site, you represent and warrant that: (1) all registration information you submit will be true, accurate, current, and complete; (2) you will maintain the accuracy of such information and promptly update such registration information as necessary; (3) you have the legal capacity and you agree to comply with these Terms of Use; (4) you are not under the age of 13; (5) you are not a minor in the jurisdiction in which you reside, or if a minor, you have received parental permission to use the Site; (6) you will not access the Site through automated or non-human means, whether through a bot, script or otherwise; (7) you will not use the Site for any illegal or unauthorized purpose; and (8) your use of the Site will not violate any applicable law or regulation.
          </p>
          
          <p>
            If you provide any information that is untrue, inaccurate, not current, or incomplete, we have the right to suspend or terminate your account and refuse any and all current or future use of the Site (or any portion thereof).
          </p>
        </div>
      );

    case 4: // USER REGISTRATION
      return (
        <div className="text-gray-700 space-y-4">
          <p>
            You may be required to register with the Site. You agree to keep your password confidential and will be responsible for all use of your account and password. We reserve the right to remove, reclaim, or change a username you select if we determine, in our sole discretion, that such username is inappropriate, obscene, or otherwise objectionable.
          </p>
        </div>
      );

    case 5: // PRODUCTS
      return (
        <div className="text-gray-700 space-y-4">
          <p>
            We make every effort to display as accurately as possible the colors, features, specifications, and details of the products available on the Site. However, we do not guarantee that the colors, features, specifications, and details of the products will be accurate, complete, reliable, current, or free of other errors, and your electronic display may not accurately reflect the actual colors and details of the products. All products are subject to availability, and we cannot guarantee that items will be in stock. We reserve the right to discontinue any products at any time for any reason. Prices for all products are subject to change.
          </p>
        </div>
      );

    case 6: // PURCHASES AND PAYMENT
      return (
        <div className="text-gray-700 space-y-4">
          <p>We accept the following forms of payment:</p>
          
          <ul className="list-disc pl-6 space-y-2">
            <li>Visa</li>
            <li>Mastercard</li>
            <li>American Express</li>
            <li>Discover</li>
            <li>PayPal</li>
            <li>UPI</li>
            <li>Netbanking</li>
            <li>Credit/ Debit Card</li>
            <li>Payment Wallet(s)</li>
          </ul>
          
          <p>
            You agree to provide current, complete, and accurate purchase and account information for all purchases made via the Site. You further agree to promptly update account and payment information, including email address, payment method, and payment card expiration date, so that we can complete your transactions and contact you as needed. Sales tax will be added to the price of purchases as deemed required by us. We may change prices at any time. All payments shall be in Indian Rupees.
          </p>
          
          <p>
            You agree to pay all charges at the prices then in effect for your purchases and any applicable shipping fees, and you authorize us to charge your chosen payment provider for any such amounts upon placing your order. We reserve the right to correct any errors or mistakes in pricing, even if we have already requested or received payment.
          </p>
          
          <p>
            We reserve the right to refuse any order placed through the Site. We may, in our sole discretion, limit or cancel quantities purchased per person, per household, or per order. These restrictions may include orders placed by or under the same customer account, the same payment method, and/or orders that use the same billing or shipping address. We reserve the right to limit or prohibit orders that, in our sole judgment, appear to be placed by dealers, resellers, or distributors.
          </p>
        </div>
      );

    case 7: // RETURN/REFUNDS POLICY
      return (
        <div className="text-gray-700 space-y-4">
          <p>
            All sales are final and no refund will be issued.
          </p>
        </div>
      );

    case 8: // PROHIBITED ACTIVITIES
      return (
        <div className="text-gray-700 space-y-4">
          <p>
            You may not access or use the Site for any purpose other than that for which we make the Site available. The Site may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us.
          </p>
          
          <p>As a user of the Site, you agree not to:</p>
          
          <ul className="list-disc pl-6 space-y-2">
            <li>Systematically retrieve data or other content from the Site to create or compile, directly or indirectly, a collection, compilation, database, or directory without written permission from us.</li>
            <li>Trick, defraud, or mislead us and other users, especially in any attempt to learn sensitive account information such as user passwords.</li>
            <li>Circumvent, disable, or otherwise interfere with security-related features of the Site, including features that prevent or restrict the use or copying of any Content or enforce limitations on the use of the Site and/or the Content contained therein.</li>
            <li>Disparage, tarnish, or otherwise harm, in our opinion, us and/or the Site.</li>
            <li>Use any information obtained from the Site in order to harass, abuse, or harm another person.</li>
            <li>Make improper use of our support services or submit false reports of abuse or misconduct.</li>
            <li>Use the Site in a manner inconsistent with any applicable laws or regulations.</li>
            <li>Engage in unauthorized framing of or linking to the Site.</li>
            <li>Upload or transmit (or attempt to upload or to transmit) viruses, Trojan horses, or other material, including excessive use of capital letters and spamming (continuous posting of repetitive text), that interferes with any party&apos;s uninterrupted use and enjoyment of the Site or modifies, impairs, disrupts, alters, or interferes with the use, features, functions, operation, or maintenance of the Site.</li>
            <li>Engage in any automated use of the system, such as using scripts to send comments or messages, or using any data mining, robots, or similar data gathering and extraction tools.</li>
            <li>Delete the copyright or other proprietary rights notice from any Content.</li>
            <li>Attempt to impersonate another user or person or use the username of another user.</li>
            <li>Upload or transmit (or attempt to upload or to transmit) any material that acts as a passive or active information collection or transmission mechanism.</li>
            <li>Interfere with, disrupt, or create an undue burden on the Site or the networks or services connected to the Site.</li>
            <li>Harass, annoy, intimidate, or threaten any of our employees or agents engaged in providing any portion of the Site to you.</li>
            <li>Attempt to bypass any measures of the Site designed to prevent or restrict access to the Site, or any portion of the Site.</li>
            <li>Copy or adapt the Site&apos;s software, including but not limited to Flash, PHP, HTML, JavaScript, or other code.</li>
            <li>Use a buying agent or purchasing agent to make purchases on the Site.</li>
            <li>Make any unauthorized use of the Site, including collecting usernames and/or email addresses of users by electronic or other means for the purpose of sending unsolicited email, or creating user accounts by automated means or under false pretenses.</li>
            <li>Use the Site as part of any effort to compete with us or otherwise use the Site and/or the Content for any revenue-generating endeavor or commercial enterprise.</li>
          </ul>
        </div>
      );

    case 9: // USER GENERATED CONTRIBUTIONS
      return (
        <div className="text-gray-700 space-y-4">
          <p>
            The Site may invite you to chat, contribute to, or participate in blogs, message boards, online forums, and other functionality, and may provide you with the opportunity to create, submit, post, display, transmit, perform, publish, distribute, or broadcast content and materials to us or on the Site, including but not limited to text, writings, video, audio, photographs, graphics, comments, suggestions, or personal information or other material (collectively, &quot;Contributions&quot;). Contributions may be viewable by other users of the Site and the Marketplace Offerings and through third-party websites. As such, any Contributions you transmit may be treated as non-confidential and non-proprietary. When you create or make available any Contributions, you thereby represent and warrant that:
          </p>
          
          <ul className="list-disc pl-6 space-y-2">
            <li>
              The creation, distribution, transmission, public display, or performance, and the accessing, downloading, or copying of your Contributions do not and will not infringe the proprietary rights, including but not limited to the copyright, patent, trademark, trade secret, or moral rights of any third party.
            </li>
            
            <li>
              You are the creator and owner of or have the necessary licenses, rights, consents, releases, and permissions to use and to authorize us, the Site, and other users of the Site to use your Contributions in any manner contemplated by the Site and these Terms of Use.
            </li>
            
            <li>
              You have the written consent, release, and/or permission of each and every identifiable individual person in your Contributions to use the name or likeness of each and every such identifiable individual person to enable inclusion and use of your Contributions in any manner contemplated by the Site and these Terms of Use.
            </li>
            
            <li>Your Contributions are not false, inaccurate, or misleading.</li>
            
            <li>
              Your Contributions are not unsolicited or unauthorized advertising, promotional materials, pyramid schemes, chain letters, spam, mass mailings, or other forms of solicitation.
            </li>
            
            <li>
              Your Contributions are not obscene, lewd, lascivious, filthy, violent, harassing, libelous, slanderous, or otherwise objectionable (as determined by us).
            </li>
            
            <li>Your Contributions do not ridicule, mock, disparage, intimidate, or abuse anyone.</li>
            
            <li>
              Your Contributions are not used to harass or threaten (in the legal sense of those terms) any other person and to promote violence against a specific person or class of people.
            </li>
            
            <li>Your Contributions do not violate any applicable law, regulation, or rule.</li>
            
            <li>Your Contributions do not violate the privacy or publicity rights of any third party.</li>
            
            <li>
              Your Contributions do not violate any applicable law concerning child pornography, or otherwise intended to protect the health or well-being of minors.
            </li>
            
            <li>
              Your Contributions do not include any offensive comments that are connected to race, national origin, gender, sexual preference, or physical handicap.
            </li>
            
            <li>
              Your Contributions do not otherwise violate, or link to material that violates, any provision of these Terms of Use, or any applicable law or regulation.
            </li>
          </ul>
          
          <p>
            Any use of the Site or the Marketplace Offerings in violation of the foregoing violates these Terms of Use and may result in, among other things, termination or suspension of your rights to use the Site and the Marketplace Offerings.
          </p>
        </div>
      );

    case 10: // CONTRIBUTION LICENSE
      return (
        <div className="text-gray-700 space-y-4">
          <p>
            By posting your Contributions to any part of the Site or making Contributions accessible to the Site by linking your account from the Site to any of your social networking accounts, you automatically grant, and you represent and warrant that you have the right to grant, to us an unrestricted, unlimited, irrevocable, perpetual, non-exclusive, transferable, royalty-free, fully-paid, worldwide right, and license to host, use, copy, reproduce, disclose, sell, resell, publish, broadcast, retitle, archive, store, cache, publicly perform, publicly display, reformat, translate, transmit, excerpt (in whole or in part), and distribute such Contributions (including, without limitation, your image and voice) for any purpose, commercial, advertising, or otherwise, and to prepare derivative works of, or incorporate into other works, such Contributions, and grant and authorize sublicenses of the foregoing. The use and distribution may occur in any media formats and through any media channels.
          </p>
          
          <p>
            This license will apply to any form, media, or technology now known or hereafter developed, and includes our use of your name, company name, and franchise name, as applicable, and any of the trademarks, service marks, trade names, logos, and personal and commercial images you provide. You waive all moral rights in your Contributions, and you warrant that moral rights have not otherwise been asserted in your Contributions.
          </p>
          
          <p>
            We do not assert any ownership over your Contributions. You retain full ownership of all of your Contributions and any intellectual property rights or other proprietary rights associated with your Contributions. We are not liable for any statements or representations in your Contributions provided by you in any area on the Site. You are solely responsible for your Contributions to the Site and you expressly agree to exonerate us from any and all responsibility and to refrain from any legal action against us regarding your Contributions.
          </p>
          
          <p>
            We have the right, in our sole and absolute discretion, (1) to edit, redact, or otherwise change any Contributions; (2) to re-categorize any Contributions to place them in more appropriate locations on the Site; and (3) to pre-screen or delete any Contributions at any time and for any reason, without notice. We have no obligation to monitor your Contributions.
          </p>
        </div>
      );

    case 11: // GUIDELINES FOR REVIEWS
      return (
        <div className="text-gray-700 space-y-4">
          <p>
            We may provide you areas on the Site to leave reviews or ratings. When posting a review, you must comply with the following criteria: (1) you should have firsthand experience with the person/entity being reviewed; (2) your reviews should not contain offensive profanity, or abusive, racist, offensive, or hate language; (3) your reviews should not contain discriminatory references based on religion, race, gender, national origin, age, marital status, sexual orientation, or disability; (4) your reviews should not contain references to illegal activity; (5) you should not be affiliated with competitors if posting negative reviews; (6) you should not make any conclusions as to the legality of conduct; (7) you may not post any false or misleading statements; and (8) you may not organize a campaign encouraging others to post reviews, whether positive or negative.
          </p>
          
          <p>
            We may accept, reject, or remove reviews in our sole discretion. We have absolutely no obligation to screen reviews or to delete reviews, even if anyone considers reviews objectionable or inaccurate. Reviews are not endorsed by us, and do not necessarily represent our opinions or the views of any of our affiliates or partners. We do not assume liability for any review or for any claims, liabilities, or losses resulting from any review. By posting a review, you hereby grant to us a perpetual, non-exclusive, worldwide, royalty-free, fully-paid, assignable, and sublicensable right and license to reproduce, modify, translate, transmit by any means, display, perform, and/or distribute all content relating to review.
          </p>
        </div>
      );

    case 12: // SOCIAL MEDIA
      return (
        <div className="text-gray-700 space-y-4">
          <p>
            As part of the functionality of the Site, you may link your account with online accounts you have with third-party service providers (each such account, a &quot;Third-Party Account&quot;) by either: (1) providing your Third-Party Account login information through the Site; or (2) allowing us to access your Third-Party Account, as is permitted under the applicable terms and conditions that govern your use of each Third-Party Account. You represent and warrant that you are entitled to disclose your Third-Party Account login information to us and/or grant us access to your Third-Party Account, without breach by you of any of the terms and conditions that govern your use of the applicable Third-Party Account, and without obligating us to pay any fees or making us subject to any usage limitations imposed by the third-party service provider of the Third-Party Account.
          </p>
          
          <p>
            By granting us access to any Third-Party Accounts, you understand that (1) we may access, make available, and store (if applicable) any content that you have provided to and stored in your Third-Party Account (the &quot;Social Network Content&quot;) so that it is available on and through the Site via your account, including without limitation any friend lists and (2) we may submit to and receive from your Third-Party Account additional information to the extent you are notified when you link your account with the Third-Party Account.
          </p>
          
          <p>
            Depending on the Third-Party Accounts you choose and subject to the privacy settings that you have set in such Third-Party Accounts, personally identifiable information that you post to your Third-Party Accounts may be available on and through your account on the Site. Please note that if a Third-Party Account or associated service becomes unavailable or our access to such Third-Party Account is terminated by the third-party service provider, then Social Network Content may no longer be available on and through the Site.
          </p>
          
          <p>
            You will have the ability to disable the connection between your account on the Site and your Third-Party Accounts at any time. PLEASE NOTE THAT YOUR RELATIONSHIP WITH THE THIRD-PARTY SERVICE PROVIDERS ASSOCIATED WITH YOUR THIRD-PARTY ACCOUNTS IS GOVERNED SOLELY BY YOUR AGREEMENT(S) WITH SUCH THIRD-PARTY SERVICE PROVIDERS. We make no effort to review any Social Network Content for any purpose, including but not limited to, for accuracy, legality, or non-infringement, and we are not responsible for any Social Network Content.
          </p>
          
          <p>
            You acknowledge and agree that we may access your email address book associated with a Third-Party Account and your contacts list stored on your mobile device or tablet computer solely for purposes of identifying and informing you of those contacts who have also registered to use the Site. You can deactivate the connection between the Site and your Third-Party Account by contacting us using the contact information below or through your account settings (if applicable). We will attempt to delete any information stored on our servers that was obtained through such Third-Party Account, except the username and profile picture that become associated with your account.
          </p>
        </div>
      );

    case 13: // SUBMISSIONS
      return (
        <div className="text-gray-700 space-y-4">
          <p>
            You acknowledge and agree that any questions, comments, suggestions, ideas, feedback, or other information regarding the Site or the Marketplace Offerings (&quot;Submissions&quot;) provided by you to us are non-confidential and shall become our sole property. We shall own exclusive rights, including all intellectual property rights, and shall be entitled to the unrestricted use and dissemination of these Submissions for any lawful purpose, commercial or otherwise, without acknowledgment or compensation to you. You hereby waive all moral rights to any such Submissions, and you hereby warrant that any such Submissions are original with you or that you have the right to submit such Submissions. You agree there shall be no recourse against us for any alleged or actual infringement or misappropriation of any proprietary right in your Submissions.
          </p>
        </div>
      );

    case 14: // THIRD-PARTY WEBSITES AND CONTENT
      return (
        <div className="text-gray-700 space-y-4">
          <p>
            The Site may contain (or you may be sent via the Site or the Marketplace Offerings) links to other websites (&quot;Third-Party Websites&quot;) as well as articles, photographs, text, graphics, pictures, designs, music, sound, video, information, applications, software, and other content or items belonging to or originating from third parties (&quot;Third-Party Content&quot;). Such Third-Party Websites and Third-Party Content are not investigated, monitored, or checked for accuracy, appropriateness, or completeness by us, and we are not responsible for any Third Party Websites accessed through the Site or any Third-Party Content posted on, available through, or installed from the Site, including the content, accuracy, offensiveness, opinions, reliability, privacy practices, or other policies of or contained in the Third-Party Websites or the Third-Party Content.
          </p>
          
          <p>
            Inclusion of, linking to, or permitting the use or installation of any Third-Party Websites or any Third-PartyContent does not imply approval or endorsement thereof by us. If you decide to leave the Site and access the Third-Party Websites or to use or install any Third-Party Content, you do so at your own risk, and you should be aware these Terms of Use no longer govern. You should review the applicable terms and policies, including privacy and data gathering practices, of any website to which you navigate from the Site or relating to any applications you use or install from the Site. Any purchases you make through Third-Party Websites will be through other websites and from other companies, and we take no responsibility whatsoever in relation to such purchases which are exclusively between you and the applicable third party. You agree and acknowledge that we do not endorse the products or services offered on Third-Party Websites and you shall hold us harmless from any harm caused by your purchase of such products or services. Additionally, you shall hold us harmless from any losses sustained by you or harm caused to you relating to or resulting in any way from any Third-Party Content or any contact with Third-Party Websites.
          </p>
        </div>
      );

    case 15: // SITE MANAGEMENT
      return (
        <div className="text-gray-700 space-y-4">
          <p>
            We reserve the right, but not the obligation, to: (1) monitor the Site for violations of these Terms of Use; (2) take appropriate legal action against anyone who, in our sole discretion, violates the law or these Terms of Use, including without limitation, reporting such user to law enforcement authorities; (3) in our sole discretion and without limitation, refuse, restrict access to, limit the availability of, or disable (to the extent technologically feasible) any of your Contributions or any portion thereof; (4) in our sole discretion and without limitation, notice, or liability, to remove from the Site or otherwise disable all files and content that are excessive in size or are in any way burdensome to our systems; and (5) otherwise manage the Site in a manner designed to protect our rights and property and to facilitate the proper functioning of the Site and the Marketplace Offerings.
          </p>
        </div>
      );

    case 16: // PRIVACY POLICY
      return (
        <div className="text-gray-700 space-y-4">
          <p>
            We care about data privacy and security. Please review our Privacy Policy: https://swalay.in/privacypolicy. By using the Site or the Marketplace Offerings, you agree to be bound by our Privacy Policy, which is incorporated into these Terms of Use. Please be advised the Site and the Marketplace Offerings are hosted in India. If you access the Site or the Marketplace Offerings from any other region of the world with laws or other requirements governing personal data collection, use, or disclosure that differ from applicable laws in India, then through your continued use of the Site, you are transferring your data to India, and you expressly consent to have your data transferred to and processed in India. Further, we do not knowingly accept, request, or solicit information from children or knowingly market to children. Therefore, in accordance with the U.S. Children&apos;s Online Privacy Protection Act, if we receive actual knowledge that anyone under the age of 13 has provided personal information to us without the requisite and verifiable parental consent, we will delete that information from the Site as quickly as is reasonably practical.
          </p>
        </div>
      );

    case 17: // DMCA NOTICE AND POLICY
      return (
        <div className="text-gray-700 space-y-4">
          <h3 className="font-semibold mb-2">Notifications</h3>
          <p>
            We respect the intellectual property rights of others. If you believe that any material available on or through the Site infringes upon any copyright you own or control, please immediately notify our Designated Copyright Agent using the contact information provided below (a &quot;Notification&quot;). A copy of your Notification will be sent to the person who posted or stored the material addressed in the Notification. Please be advised that pursuant to federal law you may be held liable for damages if you make material misrepresentations in a Notification. Thus, if you are not sure that material located on or linked to by the Site infringes your copyright, you should consider first contacting an attorney.
          </p>

          <p>
            All Notifications should meet the requirements of DMCA 17 U.S.C. § 512(c)(3) and include the following information: (1) A physical or electronic signature of a person authorized to act on behalf of the owner of an exclusive right that is allegedly infringed; (2) identification of the copyrighted work claimed to have been infringed, or, if multiple copyrighted works on the Site are covered by the Notification, a representative list of such works on the Site; (3) identification of the material that is claimed to be infringing or to be the subject of infringing activity and that is to be removed or access to which is to be disabled, and information reasonably sufficient to permit us to locate the material; (4) information reasonably sufficient to permit us to contact the complaining party, such as an address, telephone number, and, if available, an email address at which the complaining party may be contacted; (5) a statement that the complaining party has a good faith belief that use of the material in the manner complained of is not authorized by the copyright owner, its agent, or the law; and (6) a statement that the information in the notification is accurate, and under penalty of perjury, that the complaining party is authorized to act on behalf of the owner of an exclusive right that is allegedly infringed upon.
          </p>

          <h3 className="font-semibold mt-4 mb-2">Counter Notification</h3>
          <p>
            If you believe your own copyrighted material has been removed from the Site as a result of a mistake or misidentification, you may submit a written counter notification to [us/our Designated Copyright Agent] using the contact information provided below (a &quot;Counter Notification&quot;). To be an effective Counter Notification under the DMCA, your Counter Notification must include substantially the following: (1) identification of the material that has been removed or disabled and the location at which the material appeared before it was removed or disabled; (2) a statement that you consent to the jurisdiction of the Federal District Court in which your address is located, or if your address is outside the United States, for any judicial district in which we are located; (3) a statement that you will accept service of process from the party that filed the Notification or the party&apos;s agent; (4) your name, address, and telephone number; (5) a statement under penalty of perjury that you have a good faith belief that the material in question was removed or disabled as a result of a mistake or misidentification; and (6) your physical or electronic signature.
          </p>

          <p>
            If you send us a valid, written Counter Notification meeting the requirements described above, we will restore your removed or disabled material, unless we first receive notice from the party filing the Notification informing us that such party has filed a court action to restrain you from engaging in infringing activity related to the material in question. Please note that if you materially misrepresent that the disabled or removed content was removed by mistake or misidentification, you may be liable for damages, including costs and attorney&apos;s fees. Filing a false Counter Notification constitutes perjury.
          </p>

          <h3 className="font-semibold mt-4 mb-2">Designated Copyright Agent</h3>
          <div className="pl-4">
            <p>Copyright Officer</p>
            <p>Attn: Copyright Agent</p>
            <p>TalantonCore HO, C-4. 4/19, Sector-2, Rajender Nagar, Sahibabad</p>
            <p>Ghazibabad, Uttar Pradesh 20100</p>
            <p>India</p>
            <p>mytalent@talantoncore.in</p>
          </div>
        </div>
      );

    case 18: // TERM AND TERMINATION
      return (
        <div className="text-gray-700 space-y-4">
          <p>
            These Terms of Use shall remain in full force and effect while you use the Site. WITHOUT LIMITING ANY OTHER PROVISION OF THESE TERMS OF USE, WE RESERVE THE RIGHT TO, IN OUR SOLE DISCRETION AND WITHOUT NOTICE OR LIABILITY, DENY ACCESS TO AND USE OF THE SITE AND THE MARKETPLACE OFFERINGS (INCLUDING BLOCKING CERTAIN IP ADDRESSES), TO ANY PERSON FOR ANY REASON OR FOR NO REASON, INCLUDING WITHOUT LIMITATION FOR BREACH OF ANY REPRESENTATION, WARRANTY, OR COVENANT CONTAINED IN THESE TERMS OF USE OR OF ANY APPLICABLE LAW OR REGULATION. WE MAY TERMINATE YOUR USE OR PARTICIPATION IN THE SITE AND THE MARKETPLACE OFFERINGS OR DELETE YOUR ACCOUNT AND ANY CONTENT OR INFORMATION THAT YOU POSTED AT ANY TIME, WITHOUT WARNING, IN OUR SOLE DISCRETION.
          </p>
          
          <p>
            If we terminate or suspend your account for any reason, you are prohibited from registering and creating a new account under your name, a fake or borrowed name, or the name of any third party, even if you may be acting on behalf of the third party. In addition to terminating or suspending your account, we reserve the right to take appropriate legal action, including without limitation pursuing civil, criminal, and injunctive redress.
          </p>
        </div>
      );

    case 19: // MODIFICATIONS AND INTERRUPTIONS
      return (
        <div className="text-gray-700 space-y-4">
          <p>
            We reserve the right to change, modify, or remove the contents of the Site at any time or for any reason at our sole discretion without notice. However, we have no obligation to update any information on our Site. We also reserve the right to modify or discontinue all or part of the Marketplace Offerings without notice at any time. We will not be liable to you or any third party for any modification, price change, suspension, or discontinuance of the Site or the Marketplace Offerings.
          </p>
          
          <p>
            We cannot guarantee the Site and the Marketplace Offerings will be available at all times. We may experience hardware, software, or other problems or need to perform maintenance related to the Site, resulting in interruptions, delays, or errors. We reserve the right to change, revise, update, suspend, discontinue, or otherwise modify the Site or the Marketplace Offerings at any time or for any reason without notice to you. You agree that we have no liability whatsoever for any loss, damage, or inconvenience caused by your inability to access or use the Site or the Marketplace Offerings during any downtime or discontinuance of the Site or the Marketplace Offerings. Nothing in these Terms of Use will be construed to obligate us to maintain and support the Site or the Marketplace Offerings or to supply any corrections, updates, or releases in connection therewith.
          </p>
        </div>
      );

    case 20: // GOVERNING LAW
      return (
        <div className="text-gray-700 space-y-4">
          <p>
            These terms shall be governed by and defined following the laws of India. SwaLay Digital and yourself irrevocably consent that the courts of India shall have exclusive jurisdiction to resolve any dispute which may arise in connection with these terms.
          </p>
        </div>
      );

    case 21: // DISPUTE RESOLUTION
      return (
        <div className="text-gray-700 space-y-4">
          <h3 className="font-semibold mb-2">Binding Arbitration</h3>
          <p>
            Any dispute arising out of or in connection with this contract, including any question regarding its existence, validity, or termination, shall be referred to and finally resolved by the International Commercial Arbitration Court under the European Arbitration Chamber (Belgium, Brussels, Avenue Louise, 146) according to the Rules of this ICAC, which, as a result of referring to it, is considered as the part of this clause. The number of arbitrators shall be two (2). The seat, or legal place, or arbitration shall be Ghazibabad, India. The language of the proceedings shall be Hindi, English. The governing law of the contract shall be substantive law of India.
          </p>

          <h3 className="font-semibold mt-4 mb-2">Restrictions</h3>
          <p>
            The Parties agree that any arbitration shall be limited to the Dispute between the Parties individually. To the full extent permitted by law, (a) no arbitration shall be joined with any other proceeding; (b) there is no right or authority for any Dispute to be arbitrated on a class-action basis or to utilize class action procedures; and (c) there is no right or authority for any Dispute to be brought in a purported representative capacity on behalf of the general public or any other persons.
          </p>

          <h3 className="font-semibold mt-4 mb-2">Exceptions to Arbitration</h3>
          <p>
            The Parties agree that the following Disputes are not subject to the above provisions concerning binding arbitration: (a) any Disputes seeking to enforce or protect, or concerning the validity of, any of the intellectual property rights of a Party; (b) any Dispute related to, or arising from, allegations of theft, piracy, invasion of privacy, or unauthorized use; and (c) any claim for injunctive relief. If this provision is found to be illegal or unenforceable, then neither Party will elect to arbitrate any Dispute falling within that portion of this provision found to be illegal or unenforceable and such Dispute shall be decided by a court of competent jurisdiction within the courts listed for jurisdiction above, and the Parties agree to submit to the personal jurisdiction of that court.
          </p>
        </div>
      );

    case 22: // CORRECTIONS
      return (
        <div className="text-gray-700 space-y-4">
          <p>
            There may be information on the Site that contains typographical errors, inaccuracies, or omissions that may relate to the Marketplace Offerings, including descriptions, pricing, availability, and various other information. We reserve the right to correct any errors, inaccuracies, or omissions and to change or update the information on the Site at any time, without prior notice.
          </p>
        </div>
      );

    case 23: // DISCLAIMER
      return (
        <div className="text-gray-700 space-y-4">
          <p className="uppercase">
            THE SITE IS PROVIDED ON AN AS-IS AND AS-AVAILABLE BASIS. YOU AGREE THAT YOUR USE OF THE SITE SERVICES WILL BE AT YOUR SOLE RISK. TO THE FULLEST EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, IN CONNECTION WITH THE SITE AND YOUR USE THEREOF, INCLUDING, WITHOUT LIMITATION, THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE MAKE NO WARRANTIES OR REPRESENTATIONS ABOUT THE ACCURACY OR COMPLETENESS OF THE SITE&apos;S CONTENT OR THE CONTENT OF ANY WEBSITES LINKED TO THIS SITE AND WE WILL ASSUME NO LIABILITY OR RESPONSIBILITY FOR ANY (1) ERRORS, MISTAKES, OR INACCURACIES OF CONTENT AND MATERIALS, (2) PERSONAL INJURY OR PROPERTY DAMAGE, OF ANY NATURE WHATSOEVER, RESULTING FROM YOUR ACCESS TO AND USE OF THE SITE, (3) ANY UNAUTHORIZED ACCESS TO OR USE OF OUR SECURE SERVERS AND/OR ANY AND ALL PERSONAL INFORMATION AND/OR FINANCIAL INFORMATION STORED THEREIN, (4) ANY INTERRUPTION OR CESSATION OF TRANSMISSION TO OR FROM THE SITE, (5) ANY BUGS, VIRUSES, TROJAN HORSES, OR THE LIKE WHICH MAY BE TRANSMITTED TO OR THROUGH THE SITE BY ANY THIRD PARTY, AND/OR (6) ANY ERRORS OR OMISSIONS IN ANY CONTENT AND MATERIALS OR FOR ANY LOSS OR DAMAGE OF ANY KIND INCURRED AS A RESULT OF THE USE OF ANY CONTENT POSTED, TRANSMITTED, OR OTHERWISE MADE AVAILABLE VIA THE SITE. WE DO NOT WARRANT, ENDORSE, GUARANTEE, OR ASSUME RESPONSIBILITY FOR ANY PRODUCT OR SERVICE ADVERTISED OR OFFERED BY A THIRD PARTY THROUGH THE SITE, ANY HYPERLINKED WEBSITE, OR ANY WEBSITE OR MOBILE APPLICATION FEATURED IN ANY BANNER OR OTHER ADVERTISING, AND WE WILL NOT BE A PARTY TO OR IN ANY WAY BE RESPONSIBLE FOR MONITORING ANY TRANSACTION BETWEEN YOU AND ANY THIRD-PARTY PROVIDERS OF PRODUCTS OR SERVICES. AS WITH THE PURCHASE OF A PRODUCT OR SERVICE THROUGH ANY MEDIUM OR IN ANY ENVIRONMENT, YOU SHOULD USE YOUR BEST JUDGMENT AND EXERCISE CAUTION WHERE APPROPRIATE.
          </p>
        </div>
      );

    case 24: // LIMITATIONS OF LIABILITY
      return (
        <div className="text-gray-700 space-y-4">
          <p className="uppercase">
            IN NO EVENT WILL WE OR OUR DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE TO YOU OR ANY THIRD PARTY FOR ANY DIRECT, INDIRECT, CONSEQUENTIAL, EXEMPLARY, INCIDENTAL, SPECIAL, OR PUNITIVE DAMAGES, INCLUDING LOST PROFIT, LOST REVENUE, LOSS OF DATA, OR OTHER DAMAGES ARISING FROM YOUR USE OF THE SITE, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. NOTWITHSTANDING ANYTHING TO THE CONTRARY CONTAINED HEREIN, OUR LIABILITY TO YOU FOR ANY CAUSE WHATSOEVER AND REGARDLESS OF THE FORM OF THE ACTION, WILL AT ALL TIMES BE LIMITED TO THE LESSER OF THE AMOUNT PAID, IF ANY, BY YOU TO US OR $50.00 USD. CERTAIN US STATE LAWS AND INTERNATIONAL LAWS DO NOT ALLOW LIMITATIONS ON IMPLIED WARRANTIES OR THE EXCLUSION OR LIMITATION OF CERTAIN DAMAGES. IF THESE LAWS APPLY TO YOU, SOME OR ALL OF THE ABOVE DISCLAIMERS OR LIMITATIONS MAY NOT APPLY TO YOU, AND YOU MAY HAVE ADDITIONAL RIGHTS.
          </p>
        </div>
      );

    case 25: // INDEMNIFICATION
      return (
        <div className="text-gray-700 space-y-4">
          <p>
            You agree to defend, indemnify, and hold us harmless, including our subsidiaries, affiliates, and all of our respective officers, agents, partners, and employees, from and against any loss, damage, liability, claim, or demand, including reasonable attorneys&apos; fees and expenses, made by any third party due to or arising out of: (1) your Contributions; (2) use of the Site; (3) breach of these Terms of Use; (4) any breach of your representations and warranties set forth in these Terms of Use; (5) your violation of the rights of a third party, including but not limited to intellectual property rights; or (6) any overt harmful act toward any other user of the Site with whom you connected via the Site. Notwithstanding the foregoing, we reserve the right, at your expense, to assume the exclusive defense and control of any matter for which you are required to indemnify us, and you agree to cooperate, at your expense, with our defense of such claims. We will use reasonable efforts to notify you of any such claim, action, or proceeding which is subject to this indemnification upon becoming aware of it.
          </p>
        </div>
      );

    case 26: // USER DATA
      return (
        <div className="text-gray-700 space-y-4">
          <p>
            We will maintain certain data that you transmit to the Site for the purpose of managing the performance of the Site, as well as data relating to your use of the Site. Although we perform regular routine backups of data, you are solely responsible for all data that you transmit or that relates to any activity you have undertaken using the Site. You agree that we shall have no liability to you for any loss or corruption of any such data, and you hereby waive any right of action against us arising from any such loss or corruption of such data.
          </p>
        </div>
      );

    case 27: // ELECTRONIC COMMUNICATIONS
      return (
        <div className="text-gray-700 space-y-4">
          <p>
            Visiting the Site, sending us emails, and completing online forms constitute electronic communications. You consent to receive electronic communications, and you agree that all agreements, notices, disclosures, and other communications we provide to you electronically, via email and on the Site, satisfy any legal requirement that such communication be in writing. YOU HEREBY AGREE TO THE USE OF ELECTRONIC SIGNATURES, CONTRACTS, ORDERS, AND OTHER RECORDS, AND TO ELECTRONIC DELIVERY OF NOTICES, POLICIES, AND RECORDS OF TRANSACTIONS INITIATED OR COMPLETED BY US OR VIA THE SITE. You hereby waive any rights or requirements under any statutes, regulations, rules, ordinances, or other laws in any jurisdiction which require an original signature or delivery or retention of non-electronic records, or to payments or the granting of credits by any means other than electronic means.
          </p>
        </div>
      );

    case 28: // CALIFORNIA USERS AND RESIDENTS
      return (
        <div className="text-gray-700 space-y-4">
          <p>
            If any complaint with us is not satisfactorily resolved, you can contact the Complaint Assistance Unit of the Division of Consumer Services of the California Department of Consumer Affairs in writing at 1625 North Market Blvd., Suite N 112, Sacramento, California 95834 or by telephone at (800) 952-5210 or (916) 445-1254.
          </p>
        </div>
      );

    case 29: // MISCELLANEOUS
      return (
        <div className="text-gray-700 space-y-4">
          <p>
            These Terms of Use and any policies or operating rules posted by us on the Site or in respect to the Site constitute the entire agreement and understanding between you and us. Our failure to exercise or enforce any right or provision of these Terms of Use shall not operate as a waiver of such right or provision. These Terms of Use operate to the fullest extent permissible by law. We may assign any or all of our rights and obligations to others at any time. We shall not be responsible or liable for any loss, damage, delay, or failure to act caused by any cause beyond our reasonable control. If any provision or part of a provision of these Terms of Use is determined to be unlawful, void, or unenforceable, that provision or part of the provision is deemed severable from these Terms of Use and does not affect the validity and enforceability of any remaining provisions. There is no joint venture, partnership, employment or agency relationship created between you and us as a result of these Terms of Use or use of the Site. You agree that these Terms of Use will not be construed against us by virtue of having drafted them. You hereby waive any and all defenses you may have based on the electronic form of these Terms of Use and the lack of signing by the parties hereto to execute these Terms of Use.
          </p>
        </div>
      );

    case 30: // CONTACT US
      return (
        <div className="text-gray-700 space-y-4">
          <p>
            In order to resolve a complaint regarding the Site or to receive further information regarding use of the Site, please contact us at:
          </p>
          
          <div className="pl-4 mt-4">
            <p>SwaLay Digital</p>
            <p>TC HO, C-4, 4/19, Sector-2</p>
            <p>Rajender Nagar, Sahibabad</p>
            <p>Ghaziabad, Uttar Pradesh 201005</p>
            <p>India</p>
            <p>Phone: (+91)7303630201</p>
            <p>Email: swalay.care@talantoncore.in</p>
          </div>
        </div>
      );

    default:
      return (
        <p className="text-gray-700">
          {/* Content for other sections will be added here */}
        </p>
      );
  }
}

export default TermsOfService; 