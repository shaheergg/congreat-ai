import TypingText from "@/components/typing-text";

const Terms = () => {
  const text = ` Welcome to Congreat ("we", "our", "us"). By accessing or using our website (the "Site") and services (the "Services"), you agree to comply with and be bound by the following terms and conditions. Please read them carefully before using the Site. These terms apply to all visitors, users, and others who access the Site or use the Services.
1. Acceptance of Terms
By accessing or using the Site, including registering for an account or using any of our Services, you agree to be bound by these Terms and Conditions and our Privacy Policy. If you do not agree with any part of these terms, you must not access or use the Site or the Services. These Terms and Conditions apply to all users of the Site, including but not limited to browsers, vendors, customers, merchants, and content contributors.
2. Use of the Website
Congreat provides tools, resources, and services related to construction data integration, management, analytics, and workflow optimization. By using the Site, you agree to the following:
Lawful Use: You agree to use the Site and Services solely for lawful purposes. You must not use the Site in any way that violates any applicable federal, state, or local laws or regulations.
Prohibited Activities: You agree not to:
Use the Site in any way that could damage, disable, overburden, or impair the functionality of the Site or interfere with any other user's access to the Site.
Attempt to gain unauthorized access to any portion of the Site, any server, or the systems or networks connected to the Site through hacking, password mining, or any other illegal means.
Engage in any activity that could potentially harm, disrupt, or interfere with the Site or any of its services, systems, or infrastructure.
Congreat reserves the right to investigate and take appropriate legal action against anyone who violates this provision.
3. Account Registration
To access certain features of the Site or use certain Services, you may need to create an account. By registering an account with Congreat, you agree to the following:
Account Information: You agree to provide accurate, current, and complete information during the registration process and to keep this information up to date. You are responsible for maintaining the confidentiality of your account details, including your username and password.
Account Security: You are solely responsible for maintaining the security of your account and for all activities that occur under your account. If you believe that your account has been compromised or that someone has accessed your account without authorization, you must immediately notify Congreat and change your account password.
Congreat reserves the right to suspend or terminate your account at our sole discretion if we believe you have violated these terms or have engaged in fraudulent or malicious activities.
4. Intellectual Property
Congreat owns and retains all rights to the content provided on the Site, including but not limited to text, images, logos, videos, software, code, designs, and any other content (the "Content"). The Content is protected by copyright, trademark, and other intellectual property laws.
Usage Rights: You are granted a limited, non-exclusive, non-transferable license to access and use the Site and its Content for personal, non-commercial purposes. This license does not allow you to:
Copy, reproduce, distribute, or modify the Content in any form.
Use any part of the Site's Content for commercial purposes without obtaining prior written consent from Congreat.
Reverse-engineer, decompile, or disassemble any software or code provided by Congreat.
Any unauthorized use of the Content may violate copyright, trademark, and other laws.
5. Data Usage and Privacy
Congreat values your privacy and is committed to protecting your personal information. By using the Site and Services, you agree to our Privacy Policy, which outlines how we collect, use, and protect your personal data. This includes but is not limited to the following:
Data Collection: Congreat collects personal and non-personal information when you use the Site, such as name, email address, and usage data. This data is used to provide the Services, improve user experience, and enhance Site performance.
Data Usage: By using the Site, you grant Congreat a license to use the data you submit through the Site in accordance with the Privacy Policy. This may include storing and processing data for service delivery, analysis, and improvement of the Site and its functionality.
Data Protection: Congreat will make reasonable efforts to ensure that your data is secure but cannot guarantee absolute security due to the nature of online communication and internet use.
Please refer to our full Privacy Policy for more details on how your data is handled.
6. Third-Party Links
The Site may contain links to third-party websites, services, or content that are not owned or controlled by Congreat. These links are provided for your convenience and reference only.
No Responsibility for Third-Party Content: Congreat does not endorse and is not responsible for the content, privacy policies, or practices of any third-party websites. By clicking on these links, you agree that Congreat is not liable for any loss or damage that may arise from your use of third-party services.
If you decide to visit third-party websites, it is your responsibility to review their terms and conditions and privacy policies.
7. Limitation of Liability
To the fullest extent permitted by law, Congreat, its affiliates, partners, suppliers, and employees will not be liable for any direct, indirect, incidental, special, consequential, or punitive damages arising out of or in connection with your use of the Site, Services, or Content.
This includes, but is not limited to, loss of data, profits, or business interruptions. Congreat does not guarantee the accuracy, reliability, or availability of the Site or its services.
8. Termination
Congreat reserves the right to suspend or terminate your access to the Site and Services at our sole discretion, without notice or liability, if we believe you have violated any provision of these Terms or are engaging in any activities that could harm the Site, its users, or its functionality.
Termination of your access will not affect any rights or obligations incurred prior to such termination.
9. Modifications
Congreat reserves the right to modify, suspend, or discontinue the Site or Services, or any part thereof, at any time, with or without notice. We may also revise these Terms and Conditions periodically. Any changes will be posted on this page with the updated effective date.
By continuing to use the Site after these changes are made, you agree to accept the modified terms.
10. Governing Law
These Terms and Conditions shall be governed by and construed in accordance with the laws of Israel. Any disputes arising from or in connection with these Terms shall be resolved in the competent courts located in [Your Jurisdiction], and you hereby submit to the exclusive jurisdiction of those courts.
11. Contact Information
If you have any questions about these Terms and Conditions, please contact us at:
Email: info@congreat.co
Phone: +077-989887
Mailing Address: Tel Aviv, Israel`;

  return (
    <div className="space-y-8 h-full py-8">
      <div className="space-y-6">
        <h2 className="font-[700] text-[18px]">Terms Of Use</h2>
        <TypingText>{text}</TypingText>
      </div>{" "}
      <div className="h-36"></div>
    </div>
  );
};

export default Terms;
