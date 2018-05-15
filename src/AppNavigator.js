import { StackNavigator } from 'react-navigation';

import {
  MainScreen,
  SimpleAnimation,
  InterPolation,
  AnimationExample,
  DecayAnimationEx,
  CornerAnimationEx,
  MovingHeadEx,
  DragCards,
  LoginForm,
  AppNotification,
  AnimatedQuestions,
  AdvanceAnimation,
  FAB,
  Onboarding,
  EvolvingButton
} from './screens';

const AppNavigator = StackNavigator({
  MainScreen: {
    screen: MainScreen,
    navigationOptions: {
      title: 'Animation'
    }
  },
  SimpleAnimation: {
    screen: SimpleAnimation,
    navigationOptions: {
      title: 'Simple Animation'
    }
  },
  Interpolation: {
    screen: InterPolation,
    navigationOptions: {
      title: 'InterPolation'
    }
  },
  BasicAnimationExample: {
    screen: AnimationExample,
    navigationOptions: {
      title: 'Example'
    }
  },
  DecayAnimation: {
    screen: DecayAnimationEx,
    navigationOptions: {
      title: 'Decay Animation'
    }
  },
  CornerAnimaton: {
    screen: CornerAnimationEx,
    navigationOptions: {
      title: 'Corner Animation'
    }
  },
  MovingHead: {
    screen: MovingHeadEx,
    navigationOptions: {
      title: 'Moving Head'
    }
  },
  DragCards: {
    screen: DragCards,
    navigationOptions: {
      title: 'Drag Cards '
    }
  },
  LoginForm: {
    screen: LoginForm,
    navigationOptions: {
      title: 'Login Form'
    }
  },
  AppNotification: {
    screen: AppNotification,
    navigationOptions: {
      title: 'Notification'
    }
  },
  AnimatedQuestions: {
    screen: AnimatedQuestions,
    navigationOptions: {
      title: 'Animated Questions'
    }
  },
  AdvanceExample: {
    screen: AdvanceAnimation,
    navigationOptions: {
      title: 'Advance Animation'
    }
  },
  FAB: {
    screen: FAB,
    navigationOptions: {
      title: 'FAB'
    }
  },
  Onboarding: {
    screen: Onboarding,
  },
  EvolvingButton: {
    screen: EvolvingButton
  }
}, {
    initialRouteName: 'EvolvingButton'
})

export default AppNavigator;