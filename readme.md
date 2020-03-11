# RnBase

Boilerplate for React Native.

## Running the project

Assuming you have all the requirements installed, you can setup and run the project by running:

- `yarn install` to install the dependencies

### Android

- `yarn start` to start the metro bundler, in a dedicated terminal
- `yarn android` to run the Android application (remember to start a simulator or connect an Android phone)

### Customization

#### Rename App

- `yarn global add react-native-rename` to install the dependecies.
- `npx react-native-rename "RnBase App"` to rename the app.

#### Set App icon

- `react-native set-icon --path path-to-image`

#### Use Svg Component

- Copy your svg files in `./src/assets/svgs/`.
- run `yarn icon-components-reload` command.
- Add below code in whatever want to use icon

```javascript
import {IconName} from './src/components/icons'

<View>
<IconName stroke="black" width={24} height={24} />
</View>

```


### License

This project is released under the [MIT License](LICENSE)
