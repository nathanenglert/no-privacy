import { NextResponse } from 'next/server'

const posts = [
  {
    title:
      'The Ultimate Guide to Sharing Every Detail of Your Life on Social Media',
    publishDate: '2023-04-02',
    slug: 'the-ultimate-guide-sharing-every-detail',
    content:
      "Do you often feel like your life lacks purpose? Well, worry no more! In this post, we'll explore the art of oversharing on social media. From posting pictures of your breakfast to live-streaming your dental appointments, we've got you covered. Remember, if you're not constantly documenting your every move, are you even living?",
  },
  {
    title:
      'How to Become a Social Media Influencer: Sacrificing Privacy for Fame',
    publishDate: '2023-02-25',
    slug: 'how-to-become-a-social-media-influencer',
    content:
      "Want to become an overnight sensation? It's time to throw privacy out the window! In this guide, we'll teach you the secrets of becoming a social media influencer. Learn how to trade your personal life for likes and followers. Remember, your privacy is a small price to pay for fame and free protein shake endorsements!",
  },
  {
    title:
      'Social Media Privacy Settings: Because Who Needs Boundaries Anyway?',
    publishDate: '2022-12-12',
    slug: 'social-media-privacy-settings',
    content:
      "Privacy is so last century! Why bother setting boundaries when you can share every intimate detail of your life with strangers? In this post, we'll explore the fascinating world of social media privacy settings, or rather, the lack thereof. Discover how to expose your personal information to the world and become a target for identity theft. It's like playing Russian roulette, but with your data!",
  },
  {
    title: "The Art of Stalking: Mastering Social Media's Creepiest Feature",
    publishDate: '2022-11-15',
    slug: 'the-art-of-stalking-mastering-social-media-creepiest-feature',
    content:
      "Tired of having meaningful conversations and building genuine relationships? It's time to embrace the true essence of social media: stalking! In this post, we'll delve into the creepy world of online surveillance. Learn how to analyze your ex's Instagram likes, decipher cryptic tweets, and dig deep into the profiles of people you barely know. Remember, the key to happiness lies in obsessing over other people's lives!",
  },
  {
    title:
      "Privacy, Schmivacy: Why We're All Doomed in the Age of Social Media",
    publishDate: '2022-10-07',
    slug: 'privacy-schmivacy-why-were-all-doomed',
    content:
      "Forget about personal space and autonomy. We're living in the era of social media, where privacy is just a quaint notion of the past. In this eye-opening post, we'll explore how our lives have become an open book for corporations and government agencies. Discover why your personal data is worth more than gold and how you can contribute to the downfall of humanity, one tweet at a time!",
  },
]

export async function GET() {
  return NextResponse.json(posts)
}
