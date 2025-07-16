// src/content/config.ts
import { defineCollection, z } from 'astro:content';

const jsonDataCollection = defineCollection({
  type: 'data',
  schema: z.object({
    //Define JSON-file structure
    profileImage: z.string(),
    profileAlt: z.string(),
    profileLink: z.string(),
    profileTitle: z.string(),
    profileName: z.string(),
    github: z.string().url(),
    githubText: z.string(),
    portfolioImage: z.string(),
    email: z.string().email(),
    linkedin: z.string().optional(),
    instagram: z.string().optional(),
    youtube: z.string().optional(),
    alias: z.string(),
    contactSectionTitle: z.string(),
    contactSectionSubtitle: z.string(),
    contactSectionButtonText: z.string(),
    contactSectionButtonIcon: z.string(),
    techsTitle: z.string(),
    instagramIconName: z.string(),
    youtubeIconName: z.string(),
    githubIconName: z.string(),
    linkedinIconName: z.string(),
    emailIconName: z.string()
  }),
});

const teamCollection = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    role: z.string(),
    avatar: z.string(),
    linkedin: z.string().url().optional(),
    github: z.string().url().optional(),
    order: z.number(),
  }),
});

const heroCollection = defineCollection({
  type: 'content',
  schema: z.object({
    headline: z.string(),
    subheadline: z.string(),
    cta: z.string(),
  }),
});

const problemCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    points: z.array(z.object({
      title: z.string(),
      description: z.string(),
    })),
  }),
});

const solutionCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    steps: z.array(z.object({
      title: z.string(),
      description: z.string(),
    })),
    features: z.array(z.object({
      title: z.string(),
      description: z.string(),
      benefit: z.string(),
    })),
  }),
});

const visionCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
  }),
});

export const collections = {
  staticData: jsonDataCollection,
  team: teamCollection,
  hero: heroCollection,
  problem: problemCollection,
  solution: solutionCollection,
  vision: visionCollection,
};
