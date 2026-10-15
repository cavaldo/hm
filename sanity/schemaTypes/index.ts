import { defineArrayMember, defineField, defineType } from "sanity";

const seo = defineType({
  name: "siteSeo",
  title: "SEO",
  type: "object",
  fields: [
    defineField({ name: "title", title: "Page title", type: "string" }),
    defineField({
      name: "description",
      title: "Page description",
      type: "text",
      rows: 3,
    }),
  ],
});

const navLink = defineType({
  name: "siteNavLink",
  title: "Navigation link",
  type: "object",
  fields: [
    defineField({ name: "label", title: "Label", type: "string" }),
    defineField({ name: "href", title: "Link", type: "string" }),
  ],
});

const nav = defineType({
  name: "siteNav",
  title: "Navigation",
  type: "object",
  fields: [
    defineField({
      name: "links",
      title: "Links",
      type: "array",
      of: [defineArrayMember({ type: "siteNavLink" })],
    }),
    defineField({ name: "contact", title: "Contact button", type: "string" }),
    defineField({ name: "openMenu", title: "Open menu label", type: "string" }),
    defineField({
      name: "closeMenu",
      title: "Close menu label",
      type: "string",
    }),
    defineField({ name: "language", title: "Language label", type: "string" }),
  ],
});

const hero = defineType({
  name: "siteHero",
  title: "Hero",
  type: "object",
  fields: [
    defineField({ name: "eyebrow", title: "Eyebrow", type: "string" }),
    defineField({
      name: "titleBefore",
      title: "Title before emphasis",
      type: "string",
    }),
    defineField({
      name: "titleEmphasis",
      title: "Emphasized title",
      type: "string",
    }),
    defineField({
      name: "titleAfter",
      title: "Title after emphasis",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "primaryAction",
      title: "Primary button",
      type: "string",
    }),
    defineField({
      name: "secondaryAction",
      title: "Secondary button",
      type: "string",
    }),
    defineField({ name: "ring", title: "Circular text", type: "string" }),
    defineField({ name: "stamp", title: "Stamp title", type: "string" }),
    defineField({
      name: "stampSmall",
      title: "Stamp subtitle",
      type: "string",
    }),
  ],
});

const stat = defineType({
  name: "siteStat",
  title: "Statistic",
  type: "object",
  fields: [
    defineField({ name: "value", title: "Value", type: "number" }),
    defineField({ name: "label", title: "Label", type: "string" }),
  ],
});

const about = defineType({
  name: "siteAbout",
  title: "About",
  type: "object",
  fields: [
    defineField({ name: "photoAlt", title: "Photo description", type: "string" }),
    defineField({ name: "heading", title: "Heading", type: "string" }),
    defineField({
      name: "body",
      title: "Text",
      type: "text",
      rows: 5,
    }),
    defineField({
      name: "stats",
      title: "Statistics",
      type: "array",
      of: [defineArrayMember({ type: "siteStat" })],
    }),
  ],
});

const service = defineType({
  name: "siteService",
  title: "Service",
  type: "object",
  fields: [
    defineField({ name: "title", title: "Title", type: "string" }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 3,
    }),
  ],
});

const services = defineType({
  name: "siteServices",
  title: "Services",
  type: "object",
  fields: [
    defineField({ name: "heading", title: "Heading", type: "string" }),
    defineField({
      name: "items",
      title: "Services",
      type: "array",
      of: [defineArrayMember({ type: "siteService" })],
    }),
  ],
});

const event = defineType({
  name: "siteEvent",
  title: "Event",
  type: "object",
  fields: [
    defineField({ name: "key", title: "Internal key", type: "string" }),
    defineField({ name: "title", title: "Title", type: "string" }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 3,
    }),
    defineField({ name: "attendees", title: "Attendees", type: "string" }),
    defineField({ name: "detail", title: "Event detail", type: "string" }),
    defineField({ name: "image", title: "Image path", type: "string" }),
    defineField({ name: "alt", title: "Image description", type: "string" }),
  ],
});

const events = defineType({
  name: "siteEvents",
  title: "Events",
  type: "object",
  fields: [
    defineField({ name: "heading", title: "Heading", type: "string" }),
    defineField({
      name: "items",
      title: "Events",
      type: "array",
      of: [defineArrayMember({ type: "siteEvent" })],
    }),
  ],
});

const reference = defineType({
  name: "siteReference",
  title: "Reference",
  type: "object",
  fields: [
    defineField({
      name: "quote",
      title: "Quote",
      type: "text",
      rows: 4,
    }),
    defineField({ name: "name", title: "Name", type: "string" }),
    defineField({ name: "role", title: "Role", type: "string" }),
  ],
});

const references = defineType({
  name: "siteReferences",
  title: "References",
  type: "object",
  fields: [
    defineField({ name: "heading", title: "Heading", type: "string" }),
    defineField({
      name: "items",
      title: "References",
      type: "array",
      of: [defineArrayMember({ type: "siteReference" })],
    }),
  ],
});

const contactDetail = defineType({
  name: "siteContactDetail",
  title: "Contact detail",
  type: "object",
  fields: [
    defineField({ name: "label", title: "Label", type: "string" }),
    defineField({ name: "value", title: "Value", type: "string" }),
  ],
});

const contactType = defineType({
  name: "siteContactType",
  title: "Contact form option",
  type: "object",
  fields: [
    defineField({ name: "id", title: "Internal ID", type: "string" }),
    defineField({ name: "label", title: "Label", type: "string" }),
  ],
});

const contact = defineType({
  name: "siteContact",
  title: "Contact",
  type: "object",
  fields: [
    defineField({
      name: "headingBefore",
      title: "Heading before emphasis",
      type: "string",
    }),
    defineField({
      name: "headingEmphasis",
      title: "Emphasized heading",
      type: "string",
    }),
    defineField({
      name: "details",
      title: "Contact details",
      type: "array",
      of: [defineArrayMember({ type: "siteContactDetail" })],
    }),
    defineField({
      name: "socials",
      title: "Social networks",
      type: "array",
      of: [defineArrayMember({ type: "string" })],
    }),
    defineField({ name: "name", title: "Name field label", type: "string" }),
    defineField({ name: "email", title: "Email field label", type: "string" }),
    defineField({
      name: "lookingFor",
      title: "Service options label",
      type: "string",
    }),
    defineField({
      name: "types",
      title: "Service options",
      type: "array",
      of: [defineArrayMember({ type: "siteContactType" })],
    }),
    defineField({
      name: "eventDate",
      title: "Event date field label",
      type: "string",
    }),
    defineField({
      name: "guests",
      title: "Guest count field label",
      type: "string",
    }),
    defineField({
      name: "guestOptions",
      title: "Guest count options",
      type: "array",
      of: [defineArrayMember({ type: "string" })],
    }),
    defineField({
      name: "message",
      title: "Message field label",
      type: "string",
    }),
    defineField({
      name: "submit",
      title: "Submit button",
      type: "string",
    }),
    defineField({
      name: "sending",
      title: "Sending status",
      type: "string",
    }),
    defineField({
      name: "success",
      title: "Success message",
      type: "string",
    }),
    defineField({
      name: "error",
      title: "Error message",
      type: "string",
    }),
  ],
});

const footer = defineType({
  name: "siteFooter",
  title: "Footer",
  type: "object",
  fields: [
    defineField({ name: "tagline", title: "Tagline", type: "string" }),
    defineField({ name: "privacy", title: "Privacy link", type: "string" }),
    defineField({ name: "terms", title: "Terms link", type: "string" }),
  ],
});

const siteContent = defineType({
  name: "siteContent",
  title: "Website content",
  type: "document",
  fields: [
    defineField({
      name: "locale",
      title: "Language",
      type: "string",
      options: {
        list: [
          { title: "English", value: "en" },
          { title: "Čeština", value: "cs" },
        ],
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "content",
      title: "Page content",
      type: "object",
      fields: [
        defineField({ name: "seo", title: "SEO", type: "siteSeo" }),
        defineField({ name: "nav", title: "Navigation", type: "siteNav" }),
        defineField({ name: "hero", title: "Hero", type: "siteHero" }),
        defineField({ name: "about", title: "About", type: "siteAbout" }),
        defineField({
          name: "services",
          title: "Services",
          type: "siteServices",
        }),
        defineField({ name: "events", title: "Events", type: "siteEvents" }),
        defineField({
          name: "references",
          title: "References",
          type: "siteReferences",
        }),
        defineField({
          name: "contact",
          title: "Contact",
          type: "siteContact",
        }),
        defineField({ name: "footer", title: "Footer", type: "siteFooter" }),
      ],
    }),
  ],
  preview: {
    select: { locale: "locale" },
    prepare: ({ locale }) => ({
      title: locale === "cs" ? "Website content — Čeština" : "Website content — English",
    }),
  },
});

export const schemaTypes = [
  siteContent,
  seo,
  navLink,
  nav,
  hero,
  stat,
  about,
  service,
  services,
  event,
  events,
  reference,
  references,
  contactDetail,
  contactType,
  contact,
  footer,
];
