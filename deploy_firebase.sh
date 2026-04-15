#!/usr/bin/env bash
set -euo pipefail

cd "$(dirname "${BASH_SOURCE[0]}")"

if ! command -v npm >/dev/null 2>&1; then
  echo "Error: npm not found. Install Node.js + npm first." >&2
  exit 1
fi

if ! command -v firebase >/dev/null 2>&1; then
  echo "Error: firebase CLI not found." >&2
  echo "Install it with: npm i -g firebase-tools" >&2
  exit 1
fi

echo "==> Building static site (Nuxt generate)"
npm run generate

echo "==> Deploying to Firebase"
firebase deploy "$@"
