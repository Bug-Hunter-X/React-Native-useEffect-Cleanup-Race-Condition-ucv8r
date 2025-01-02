# React Native useEffect Cleanup Race Condition

This repository demonstrates a common, yet subtle, error in React Native when using the `useEffect` hook with asynchronous operations and cleanup functions.  The problem arises when the cleanup function attempts to interact with component state after the component has unmounted, leading to unexpected behavior or crashes.

The `useEffectBug.js` file showcases the problematic code, while `useEffectSolution.js` provides a corrected version using a `mounted` state variable to prevent accessing unmounted state.