// Simple JavaScript file to render content
document.addEventListener('DOMContentLoaded', function() {
  const root = document.getElementById('root');
  
  root.innerHTML = `
    <div style="font-family: Arial, sans-serif; max-width: 1200px; margin: 0 auto; padding: 20px;">
      <header style="background-color: #4F46E5; color: white; padding: 20px; border-radius: 8px;">
        <h1 style="margin: 0; font-size: 28px;">AI for Sheets</h1>
      </header>
      
      <main style="margin: 40px 0;">
        <h2 style="font-size: 24px; color: #111827;">Welcome to AI for Sheets</h2>
        <p style="font-size: 16px; line-height: 1.5; color: #4B5563;">
          Transform your spreadsheets with the power of artificial intelligence. Automate tasks, get insights, and save time.
        </p>
        
        <div style="margin-top: 30px;">
          <a href="#" style="display: inline-block; background-color: #4F46E5; color: white; padding: 12px 24px; 
             text-decoration: none; border-radius: 6px; font-weight: bold;">Get Started</a>
        </div>
      </main>
      
      <footer style="background-color: #111827; color: white; padding: 20px; border-radius: 8px; text-align: center;">
        <p style="margin: 0; font-size: 14px;">© ${new Date().getFullYear()} AI for Sheets. All rights reserved.</p>
      </footer>
    </div>
  `;
}); 