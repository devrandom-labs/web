# Content Management

This directory contains markdown files that manage the text content for the devrandom website.

## Landing Page Structure

The page now includes a transparent, fixed navigation bar with smooth scrolling to different sections:

- **Home** - Hero section with logo and main messaging
- **Problem** - Threat landscape and market urgency
- **Solution** - Nova introduction and features
- **Vision** - Company mission and future goals
- **Team** - Team member profiles
- **Get Access** - Call-to-action for signups

## Team Members (`/team/`)

To add a new team member:

1. Create a new `.md` file in the `team/` directory
2. Use this frontmatter structure:

```yaml
---
name: "Full Name"
role: "Job Title"
avatar: "/images/profile.webp"
linkedin: "https://www.linkedin.com/in/username" # optional
github: "https://github.com/username" # optional
order: 1 # determines display order (lower numbers first)
---
```

3. Write the team member's bio in the markdown content below the frontmatter
4. The team member will automatically appear on the website

## Hero Content (`/hero/`)

To update the hero section:

1. Edit `hero/main.md`
2. Update the frontmatter:

```yaml
---
headline: "Main headline text"
subheadline: "Detailed subtitle text"
cta: "Call-to-action button text"
---
```

## Problem Section (`/problem/`)

To update the problem framing:

1. Edit `problem/main.md`
2. Update the frontmatter with title, subtitle, and problem points:

```yaml
---
title: "Section title"
subtitle: "Section subtitle"
points:
  - title: "Problem 1"
    description: "Description of the problem"
---
```

## Solution Section (`/solution/`)

To update Nova's solution details:

1. Edit `solution/main.md`
2. Update the frontmatter with steps and features:

```yaml
---
title: "Section title"
subtitle: "Section subtitle"
steps:
  - title: "Step 1"
    description: "What happens in this step"
features:
  - title: "Feature name"
    description: "Feature description"
    benefit: "Specific benefit"
---
```

## Vision Section (`/vision/`)

To update the company mission:

1. Edit `vision/main.md`
2. Update the frontmatter and content:

```yaml
---
title: "Section title"
---
Mission statement and vision content goes here...
```

## Navigation Features

The navigation component includes:

- **Fixed positioning** - Stays at top when scrolling
- **Transparent background** - Uses backdrop blur for modern look
- **Active state tracking** - Highlights current section
- **Smooth scrolling** - Animates to sections when clicked
- **Mobile responsive** - Hamburger menu for small screens
- **Professional styling** - Clean, minimal design

## Benefits

- ✅ Easy to add/edit team members
- ✅ Content is version controlled
- ✅ Markdown formatting support
- ✅ Type-safe with Astro content collections
- ✅ Automatic sorting and display
- ✅ Professional navigation with smooth UX
- ✅ Mobile-responsive design
- ✅ Grant application optimized 