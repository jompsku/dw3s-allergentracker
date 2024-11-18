import { Box, Typography } from "@mui/material";

const PrivacyPolicyPage = () => {
  return (
    <Box>
      <Typography variant="h2" sx={{ marginTop: '25px' }}>Privacy Policy</Typography>
      <p>
        <strong>Effective Date:</strong> 18.11.2024
      </p>
      <p>
        Allergen Tracker (<q>we</q>, <q>us</q>, <q>our</q>) is committed to
        protecting your privacy. This Privacy Policy explains how we collect,
        use, and protect the information you provide when using our allergen
        tracker application (<q>the Application</q>).
      </p>

      <Typography variant="h3">1. Information We Collect</Typography>
      <Typography variant="h4" sx={{ marginTop: '16px' }}>a. User-Provided Information</Typography>
      <p>When using the Application, you may voluntarily input:</p>
      <ul>
        <li>Cosmetic products you have used</li>
        <li>Ingredient lists from those products</li>
        <li>Observations about product effects</li>
      </ul>

      <Typography variant="h4">b. Authentication Information</Typography>
      <p>
        We use a third-party OAuth service (Google) to handle user
        authentication securely. This service may collect:
      </p>
      <ul>
        <li>Your email address</li>
        <li>Your name or username</li>
        <li>Other basic account information</li>
      </ul>
      <p>
        We do not store or manage your account details; all authentication is
        handled directly by the OAuth provider.
      </p>

      <Typography variant="h3">2. How We Use Your Information</Typography>
      <p>We use the information you provide exclusively to:</p>
      <ul>
        <li>
          Help you track cosmetic products and identify ingredients that may
          cause allergic reactions
        </li>
        <li>Provide you with a personalized and secure experience</li>
      </ul>
      <p>
        We do not use or share your data for advertising, analytics, or other
        purposes.
      </p>

      <Typography variant="h3">3. How We Share Your Information</Typography>
      <p>
        We do not sell or share your personal information with third parties.
        The only exceptions are:
      </p>
      <ul>
        <li>
          <strong>Legal Compliance:</strong> If required by law or in response
          to valid legal requests.
        </li>
      </ul>

      <Typography variant="h3">4. Data Storage and Security</Typography>
      <p>
        When you log in to the Application using Google OAuth, we only store
        your Google ID on our servers. This ID is used solely for authentication
        and user identification purposes within the Application.
      </p>
      <p>
        Your email address and name are stored locally in your browser’s{" "}
        <strong>localStorage</strong> for the purpose of enhancing user
        experience (e.g., remembering your login details). This data is not
        stored on our servers and is only accessible on the device you are
        using.
      </p>
      <p>
        We do not use, sell, or share this locally stored data for any other
        purposes beyond the basic functionality of the Application.
      </p>

      <ul>
        <li>
          User data about products and ingredients is securely stored and
          handled with appropriate technical measures.
        </li>
        <li>
          Account authentication and related information are securely managed by
          the OAuth provider.
        </li>
      </ul>

      <Typography variant="h3">5. Your Choices</Typography>
      <p>You have the following choices regarding your data:</p>
      <ul>
        <li>
          <strong>Access and Update:</strong> You can edit or delete product and
          ingredient information directly within the Application.
        </li>
        <li>
          <strong>Delete Account:</strong> To revoke access or delete your OAuth
          account, please manage this through your OAuth provider. If you wish
          to delete product and ingredient data stored in the Application,
          contact us. The contact details are available on our{" "}
          <a href="/about" style={{ textDecoration: "underline" }}>
            About
          </a>{" "}
          page.
        </li>
      </ul>

      <Typography variant="h3">6. GDPR Compliance</Typography>
      <p>
        This Application complies with the General Data Protection Regulation
        (GDPR). As a user in the European Union, you have the following rights
        regarding your personal data:
      </p>
      <ul>
        <li>
          <strong>Access:</strong> You can request access to the data you have
          provided.
        </li>
        <li>
          <strong>Correction:</strong> You can request corrections to inaccurate
          or incomplete data.
        </li>
        <li>
          <strong>Deletion:</strong> You can request the deletion of your data
          at any time.
        </li>
        <li>
          <strong>Revocation:</strong> You can revoke consent for data
          processing by managing your OAuth settings or contacting us.
        </li>
      </ul>
      <p>
        For more information or to exercise your rights, please contact us. The
        contact details are available on our{" "}
        <a href="/about" style={{ textDecoration: "underline" }}>
          About
        </a>{" "}
        page.
      </p>

      <Typography variant="h3">7. Children’s Privacy</Typography>
      <p>
        The Application is not intended for individuals under 13. We do not
        knowingly collect personal information from children.
      </p>

      <Typography variant="h3">8. Changes to This Privacy Policy</Typography>
      <p>
        We may update this Privacy Policy from time to time. Changes will be
        effective immediately upon posting.
      </p>

      <Typography variant="h3">9. Contact Us</Typography>
      <p>
        If you have any questions or concerns about this Privacy Policy, please
        contact us. The contact details are available on our{" "}
        <a href="/about" style={{ textDecoration: "underline" }}>
          About
        </a>{" "}
        page.
      </p>
    </Box>
  );
};

export default PrivacyPolicyPage;
