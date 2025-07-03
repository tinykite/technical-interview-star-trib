# The Minnesota Star Tribune Technical Assessment 
### Mid-Level Engineer - Frontend

### Table of Contents

- [Create Your Own Copy of this Repository](#create-your-own-copy)
- [Check Out the Correct Assessment Branch](#check-out-the-correct-assessment-branch)
- [Instructions](#instructions)
- [Submitting Your Work](#submitting-your-work)
- [Assessment Ticket](#assessment-ticket)
- [🛠 Development & Run Commands](./dev.md)

---

### Create Your Own Copy

Click the green "Use this template" button at the top of the repository page to create your own **public** copy under your GitHub account.

Once created, clone it to your local machine:

```bash
git clone git@github.com:your-username/your-repo-name.git
cd your-repo-name
```

### Check Out the Correct Assessment Branch
You’ll complete your work on a specific branch depending on your role and assessment type.

📬 Check your invitation email for the name of the branch you should use — for example, `mid-level-assessment/frontend`.

Fetch all branches and switch to the correct one:

```
git checkout mid-level-assessment/frontend  # Replace with the branch specified in your email
```

### Instructions
In the branch provided by the hiring manager, you’ll find a sample ticket similar to what you might receive at The Minnesota Star Tribune. You will find the full ticket [at the bottom of this README](#assessment-ticket).

Your task is to read through it, understand the intent, and implement a solution. This is your opportunity to show us how you approach a problem, organize your code, and communicate trade-offs or ideas. If you see opportunities to improve the existing code, feel free to go for it — or leave a comment noting what you'd change and why.

⏱️ **Time Expectations**  
Please aim to spend around **1 hour** or less on this. No more than **2 hours max** — we want to respect your time.

💬 **Stuck or Blocked?**  
It happens!

If you run into any snags — whether it’s the repo not setting up, you’re confused about the project structure, or something just isn’t clicking — please reach out to the hiring manager. Asking for help is a skill we value deeply here, and we see debugging and pair-programming as collaborative, not corrective.

If you need a hand, we’ll hop on a quick call and work through it together. This isn’t a test of perfection — it’s a chance to get a feel for how we solve problems together.

### Submitting Your Work
When you’re done:

- Push your changes to your GitHub repo.
- Create a Pull Request in your repo (draft is fine).
- Email the link to the pull request to the Hiring Manager.
- During the technical portion of your final interview, you’ll walk through your solution with a team member and discuss your approach, trade-offs, and ideas for future improvement(s).

--- 

### Assessment Ticket
✨ Feature: Following Your Favorite Author(s)

**Problem Statement**
Readers can see an author’s byline on each article, but there’s no way to "follow" authors they like. We want to make the experience more personalized by allowing users to follow specific journalists and reflect that preference across the app.

**Proposed Solution**
Let’s introduce a lightweight "Follow Author" feature. You’ll wire up a way for users to follow and unfollow those authors across the app.

**Business Value**
Following authors helps build loyalty and engagement. Readers begin to recognize trusted voices and are more likely to read more from people they follow.

**Business Requirements**
- A user should be able to follow or unfollow an author.
    - This can be a checkbox, toggle, button — your call!
    - You only need to implement this on the AuthorPage.
- If an author is being followed, display a little "Following" pill
    - On the ArticlePreview card
    - On the main ArticlePage.
- Re-order articles on the homepage so that followed author's articles appear first in each section.

**Technical Requirements**
- You must use React Context + Provider to manage the follow state globally. 
- This state should be accessible across pages and components.
- Persist the follow state to localStorage so it survives refreshes.

**Design Notes**  
You don’t need to match any specific designs here. A simple pill or "badge" that says “Following” is more than enough.

**Bonus Points**  
The above requirements cover everything we need to assess your technical skills — but if you're someone who enjoys going the extra mile, here's how you can show it:
- Add a new route at /author/favorites
- On this page, display followed authors and their articles
    - Group the articles by author
    - Use the author’s name as a subheading, followed by a list of their articles
This is strictly **optional** — it's simply here to give you a clear direction if you'd like to keep building. No pressure, and it won't count against you if you skip it!
