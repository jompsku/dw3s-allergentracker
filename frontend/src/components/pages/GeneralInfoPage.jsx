import { Box, Typography } from "@mui/material";

const GeneralInfoPage = () => {
  return (
    <Box>
      <Typography variant="h2" sx={{ marginTop: '25px' }}>User Instructions</Typography>
      <p>
        Welcome to the Allergen Tracker! This guide will help you understand how to use the app to track your products and find out which ingredients might be causing allergic reactions.
      </p>

      <Typography variant="h3" sx={{ marginTop: '16px' }}>1. Logging In</Typography>
      <p>
        Use your existing Google account with @aalto.fi address to log in to the app securely. This keeps your data safe and gives you access to your personal product list.
      </p>

      <Typography variant="h3" sx={{ marginTop: '16px' }}>2. Understanding Your Dashboard</Typography>
      <p>The dashboard has two main sections:</p>
      <ul>
        <li>
          <strong>Your Top Allergens:</strong> Displays the ingredients that might be causing issues based on your used products.
        </li>
        <li>
          <strong>Your Products:</strong> Displays the products you’ve added, along with details about their ingredients and whether they caused any problems for you.
        </li>
      </ul>

      <Typography variant="h3" sx={{ marginTop: '25px' }}>3. Adding a Product</Typography>
      <p>
        To add a product you’ve used:
      </p>
      <ul>
        <li>Tap the <strong><q>Add Product</q></strong> button.</li>
        <li>
          Enter the product name and type out the ingredients. Separate each ingredient with a comma (e.g., <q>water, glycerin, alcohol</q>).
        </li>
        <li>
        <div style={{ marginLeft: '20px' }}>
          If you prefer, use the scan option to automatically upload the product’s ingredient list.
        </div>
        </li>
        <li>
          Mark, whether the product causes you problems or not.
        </li>
      </ul>
      <p>Once you’re done, save the product and it will appear in your product list.</p>

      <Typography variant="h3" sx={{ marginTop: '25px' }}>4. Managing Your Products</Typography>
      <Typography variant="h4" sx={{ marginTop: '16px' }}>a. Viewing Product Details</Typography>
      <p>
        To see more details about a product and edit them, such as its ingredients, expand the product from the <strong>Your Products</strong> list.
      </p>

      <Typography variant="h4" sx={{ marginTop: '16px' }}>b. Editing a Product</Typography>
      <p>
        If you need to make changes to a product’s name, ingredient list, or change whether it causes you problems, click the <q><strong>Edit</strong></q> button and update the details.
      </p>

      <Typography variant="h4" sx={{ marginTop: '16px' }}>c. Deleting a Product</Typography>
      <p>
        To remove a product from your list, click the <q><strong>Delete</strong></q> button. This action is permanent, so be sure before deleting.
      </p>

      <Typography variant="h3" sx={{ marginTop: '25px' }}>5. Additional Features</Typography>
      <Typography variant="h4" sx={{ marginTop: '16px' }}>a. <q>How It Works</q> Section</Typography>
      <p>
        Learn more about how the app works by visiting the “How It Works” section in the menu at the top of every application view.
      </p>

      <Typography variant="h4" sx={{ marginTop: '16px' }}>b. Support Links</Typography>
      <p>
        You can find useful links like <i>About</i>, <i>Terms of Service</i>, and <i>Privacy Policy</i> at the bottom of every application view.
      </p>

      <Typography variant="h4" sx={{ marginTop: '16px' }}>c. Language</Typography>
      <p>
        Currently, the app is available only in English.
      </p>

      <Typography variant="h3" sx={{ marginTop: '25px' }}>7. Final Notes</Typography>
      <p>
        We hope this app helps you better understand which products and ingredients work best for you. Explore the features, add your products, and let the app guide you in managing your allergies.
      </p>
    </Box>
  );
};

export default GeneralInfoPage;
