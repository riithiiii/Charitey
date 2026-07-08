// Replace with Google Play Store URL after app release.
export const PLAY_STORE_URL = "#";

export const contact = {
  email: "charitey12@gmail.com",
  subject: "Support Request from Charitey Website",
  body: "Hi Charitey,\n\nI would like to enquire about...\n\nThanks.",
} as const;

/** Pre-filled mailto — widely supported across desktop and mobile clients */
export function getContactMailto() {
  const subject = encodeURIComponent(contact.subject);
  const body = encodeURIComponent(contact.body);

  return `mailto:${contact.email}?subject=${subject}&body=${body}`;
}
