### Suggested apps

- [Volta](https://docs.volta.sh/guide/getting-started) - Helps manage node, npm and yarn versions 
- [Android Studio](https://developer.android.com/studio/) - To emulate Android
- [VSCode](https://code.visualstudio.com/download)

### Configure emulator

#### Android emulator on Windows

To install the Android SDK on Windows, which is necessary for running an Android emulator, you can follow these steps:

1. **Download and Install Android Studio**:
   - Android Studio is the official Integrated Development Environment (IDE) for Android app development and comes bundled with the Android SDK.
   - Visit the [Android Studio download page](https://developer.android.com/studio).
   - Download the appropriate version for Windows.
   - Run the downloaded installer and follow the instructions to install Android Studio. By default, it will install the Android SDK as well.

2. **Launch Android Studio and Complete Setup**:
   - Open Android Studio.
   - If this is your first time running it, a setup wizard will guide you through the process of installing various components, including the Android SDK.

3. **Configure Android SDK**:
   - Within Android Studio, go to `Tools` -> `SDK Manager`.
   - In the SDK Manager, you can see a list of available SDK platforms and SDK tools. Install the ones necessary for your development needs. Typically, this includes the latest Android SDK Platform, the Android SDK Build-Tools, and more.
   - Note the location of the SDK; you will need this path for your emulator setup in VSCode. The default location is usually `C:\Users\[Your_UserName]\AppData\Local\Android\Sdk`.

4. **Update Environment Variables**:
   - To easily access the SDK tools from the command line, you should add the SDK’s `tools` and `platform-tools` directories to your PATH environment variable.
   - Go to `Control Panel` -> `System and Security` -> `System` -> `Advanced system settings` -> `Environment Variables`.
   - Under System Variables, find and select `Path`, then click `Edit`.
   - Add the paths `C:\Users\[Your_UserName]\AppData\Local\Android\Sdk\tools`, `C:\Users\[Your_UserName]\AppData\Local\Android\Sdk\emulator\emulator `, `C:\Users\[Your_UserName]\AppData\Local\Android\Sdk\platform-tools`.

   ❗ Remember to replace `[Your_UserName]` with your actual Windows username in the paths. This will complete the installation of the Android SDK, making it possible to use the Android emulator through VSCode on your Windows machine.


5. **Verify Installation**:
   - Open a command prompt and type `adb`, which is the Android Debug Bridge, a tool found in `platform-tools`. If the installation is successful, you should see a list of adb commands.

6. **Integrate with VSCode**:
   1. **Install React Native Tools in VSCode**:
      - Open VSCode, go to Extensions (`Ctrl+Shift+X`), and search for `React Native Tools`. Install it.

   2. **Explore React Native Commands**:
      - Press `Ctrl+Shift+P` to open the Command Palette.
      - Type "React Native" to see available commands.

   3. **Launch Android Emulator**:
      - In the Command Palette, select "React Native: Launch Android Emulator".
      - Ensure you have Android Virtual Devices (AVDs) set up in your Android SDK. If not, create them using Android Studio first.

