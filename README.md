# Claude Getting Started

A starter mobile app for **iPhone and Android**, built with [Expo](https://expo.dev) (React Native + TypeScript).

## Run it on your phone (no Mac needed)

1. Install **Expo Go** from the App Store or Google Play.
2. On your computer:
   ```bash
   npm install
   npx expo start
   ```
3. Scan the QR code with your iPhone's Camera app, or from inside Expo Go on Android.

Edit `App.tsx` and the app reloads instantly.

## Build and publish with EAS (cloud builds, no Xcode required)

One-time setup:
```bash
npx eas-cli@latest login     # free Expo account
npx eas-cli@latest init      # links this project to your Expo account
```

Builds:
```bash
npx eas-cli@latest build --profile preview --platform android   # installable APK for testing
npx eas-cli@latest build --profile production --platform all    # store builds (iOS + Android)
```

Submit to the stores:
```bash
npx eas-cli@latest submit --platform ios       # TestFlight / App Store (needs Apple Developer account, $99/yr)
npx eas-cli@latest submit --platform android   # Google Play (needs Play Console account, $25 one-time)
```

Before your first store build, set a unique `ios.bundleIdentifier` and `android.package`
(e.g. `com.yourname.gettingstarted`) in `app.json`. EAS will offer to do this for you.

## Useful commands

```bash
npx tsc --noEmit        # typecheck
npx expo-doctor         # check project health
npx expo install <pkg>  # add a package with SDK-compatible versions
```
