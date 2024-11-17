import { Box, Typography } from "@mui/material";

const TosPage = () => {
  return (
    <Box>
      <Typography variant="h2">Terms of Service</Typography>
      <p><strong>Effective Date:</strong> 18.11.2024</p>
      <p>
        Welcome to Allergen Tracker (<q>we</q>, <q>us</q>, <q>our</q>). By accessing or using our allergen tracker application
        (<q>the Application</q>), you agree to these Terms of Service (<q>Terms</q>). Please read them carefully.
      </p>

      <Typography variant="h3">1. Acceptance of Terms</Typography>
      <p>
        By using the Application, you acknowledge that you have read, understood, and agree to be bound by these Terms. 
        If you do not agree, you may not use the Application.
      </p>

      <Typography variant="h3">2. Eligibility</Typography>
      <p>
        The Application is intended for individuals aged 13 and older. By using the Application, you confirm 
        that you meet this eligibility requirement.
      </p>

      <Typography variant="h3">3. Use of the Application</Typography>
      <ul>
        <li>The Application is provided for personal, non-commercial use.</li>
        <li>You agree to use the Application only for its intended purpose and in compliance with applicable laws.</li>
        <li>You must not attempt to disrupt the functionality of the Application.</li>
      </ul>

      <Typography variant="h3">3.1 Right to Use</Typography>
      <p>
        Subject to your compliance with these Terms, we grant you a limited, non-exclusive, non-transferable license to 
        use the Application for personal, non-commercial purposes. This license is revocable at our discretion, and you 
        may only use the Application in accordance with these Terms and for its intended purpose. You are prohibited from 
        using the Application for any commercial purpose or in any manner that violates applicable laws or regulations.
      </p>

      <Typography variant="h3">4. User Content</Typography>
      <p>
        You are responsible for any content you provide, such as cosmetic products and ingredients. By submitting content, 
        you confirm that you have the right to do so and grant us the right to use it solely to provide the service.
      </p>

      <Typography variant="h3">5. Data and Privacy</Typography>
      <p>We are committed to protecting your privacy. Our use of your data is outlined in our <a href="/privacy-policy">Privacy Policy</a>.</p>

      <Typography variant="h3">6. GDPR Compliance</Typography>
      <p>
        This Application complies with the General Data Protection Regulation (GDPR). As a user in the European Union, you 
        have the following rights regarding your personal data:
      </p>
      <ul>
        <li><strong>Access:</strong> You can request access to the data you have provided.</li>
        <li><strong>Correction:</strong> You can request corrections to inaccurate or incomplete data.</li>
        <li><strong>Deletion:</strong> You can request the deletion of your data at any time.</li>
        <li><strong>Revocation:</strong> You can revoke consent for data processing by managing your OAuth settings or contacting us.</li>
      </ul>
      <p>
        For more information or to exercise your rights, please contact us. The contact details are available on our <a href="/about" style={{ textDecoration: 'underline' }}>About</a> page.
      </p>

      <Typography variant="h3">7. Changes to Terms</Typography>
      <p>
        We may update these Terms from time to time. Changes will be effective immediately upon posting. 
        We encourage you to review these Terms periodically.
      </p>

      <Typography variant="h3">8. Termination</Typography>
      <p>
        We may suspend or terminate your access to the Application if you violate these Terms or for any other reason, at our discretion.
      </p>

      <Typography variant="h3">9. Limitation of Liability</Typography>
      <p>
        To the fullest extent permitted by law, we shall not be liable for any indirect, incidental, special, or consequential damages arising out of the use of the Application.
      </p>

      <Typography variant="h3">10. Contact Us</Typography>
      <p>
        If you have any questions or concerns about these Terms of Service, please contact us. The contact details are available on our <a href="/about" style={{ textDecoration: 'underline' }}>About</a> page.
      </p>
    </Box>
  );
};

export default TosPage;
