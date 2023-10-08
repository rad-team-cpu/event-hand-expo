module.exports = {
    name: 'event-hand-expo',
    slug: 'event-hand-expo',
    version: '1.0.0',
    assetBundlePatterns: ['**/*'],
    experiments: {
      tsconfigPaths: true,
    },
    extra: {
      clerkPublishableKey: process.env.CLERK_PUBLISHABLE_KEY,
    },
  };
  