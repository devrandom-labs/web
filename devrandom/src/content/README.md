# Content Management

This directory contains markdown files that manage the text content for the devrandom website.

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
title: "Main headline text"
subtitle: "Subtitle text"
---
```

## Benefits

- ✅ Easy to add/edit team members
- ✅ Content is version controlled
- ✅ Markdown formatting support
- ✅ Type-safe with Astro content collections
- ✅ Automatic sorting and display 