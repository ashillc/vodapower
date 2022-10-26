import
  React, {
  Component,
} from 'react';

import {
  StyleSheet,
  View,
  Text,
  ImageBackground
} from 'react-native';

import
  PropTypes
from 'prop-types';

import {
  AwsEnvironments
} from 'app/core/constants';

import {
  LinearGradient
} from 'expo-linear-gradient';

import {
  Images,
  Gradients,
  Colors
} from 'app/ui/enablement/unlockSummer/constants';

const screenWidth = AppCore.Dimensions.screenWidth;

export class SummerBackground extends Component {

  static propTypes = {
    children: PropTypes.any.isRequired,
    hideGradient: PropTypes.bool.isRequired,
    backgroundOverlay: PropTypes.string,
    padForHeader: PropTypes.bool,
    style: PropTypes.any,
    imageStyle: PropTypes.any,
    bottomBannerTextLeft: PropTypes.string,
    bottomBannerTextRight: PropTypes.string,
    bottomBannerTextCenter: PropTypes.string,
    isNoBorderRadius: PropTypes.bool,
    additionalHeight: PropTypes.number,
    isTopRadius: PropTypes.bool,
    imageUri: PropTypes.string,
    topPadding: PropTypes.bool,
  };

  static defaultProps = {
    hideGradient: false,
    backgroundOverlay: undefined,
    padForHeader: false,
    gradientHeight: undefined,
    style: null,
    imageStyle: null,
    gradientStart: undefined,
    gradientEnd: undefined,
    gradientLocations: undefined,
    isTopRadius: false,
    additionalHeight: 20,
    topPadding: false
  };

  state = {
    childrenHeight: 0,
    url: null
  }

  replaceHost = async (url) => {

    if (!AppCore.Validation.isAbsoluteUrl(url)) {

      const environment = await AppCore.DataStore.getItem('environment');

      let baseUrl = url.startsWith('{AWS}')
        ? AwsEnvironments[environment]

        : await AppCore.DataStore.getItem('baseUrl');

      if (!baseUrl) {

        throw Error('There is no environment base URL available in cache to enrich the requested relative path.');
      }

      if (!url.startsWith('/') && !url.startsWith('{AWS}')) {

        url = `/${url}`;
      }

      url = `${baseUrl}${url.replace('{AWS}', '')}`;
    }

    if (!this.state.url) {

      this.setState({
        url: url
      });
    }
  }

  getHeaderPadding = (headerHeight) => this.props.padForHeader ? {
    paddingTop: headerHeight
  } : {
    paddingTop: 0
  };

  onLayout = (event) => {

    const { height } = event.nativeEvent.layout;

    this.setState({
      childrenHeight: height
    });
  }

  componentDidMount = () => {

    this.replaceHost(this.props.imageUri || Images.HeaderBG);
  }

  render = () => {

    return (

      <View style={[
        styles.container,
        this.props.style,
      ]}>

        {!this.props.hideGradient &&

          <ImageBackground
            resizeMode={'cover'}
            style={[
              this.props.imageStyle
                ? this.props.imageStyle
                : styles.image,
              this.props.isNoBorderRadius && styles.noBorderRadius,
              this.props.isTopRadius && styles.topRadius, {
                height: this.props.isTopRadius ? this.state.childrenHeight : this.state.childrenHeight + this.props.additionalHeight,
              }
            ]}
            width={screenWidth}
            source={ { uri: this.state.url } } />
        }

        {!!this.props.backgroundOverlay &&

          <View style={[
            styles.overlayBackground,
            { backgroundColor: this.props.backgroundOverlay }
          ]} />
        }

        <View
          onLayout={this.onLayout}
          style={[
            styles.children,
            this.props.topPadding && styles.topPadding,
          ]}>
          {this.props.children}
        </View>

        {(!!this.props.bottomBannerTextLeft || !!this.props.bottomBannerTextRight) &&

          <View
            style={styles.bottomBanner}>
            <LinearGradient
              colors={Gradients.WalletBanner}
              style={styles.bottomBannerGradient}
              start={{ x: 0, y: 1 }}
              end={{ x: 1, y: 1 }}
            >
              <Text style={styles.bottomBannerTextLeftStyle}>{this.props.bottomBannerTextLeft}</Text>
              <Text style={styles.bottomBannerTextRightStyle}>{this.props.bottomBannerTextRight}</Text>
            </LinearGradient>
          </View>
        }

        {(!!this.props.bottomBannerTextCenter) &&

          <View
            style={[ styles.bottomBanner,styles.bottomBannerNarrow ]}>
            <LinearGradient
              colors={Gradients.WalletBanner}
              style={[ styles.bottomBannerGradient,styles.bottomBannerGradientNarrow ]}
              start={{ x: 0, y: 1 }}
              end={{ x: 1, y: 1 }}
            >
              <Text style={[ styles.bottomBannerTextLeftStyle, styles.bottomBannerTextCenterStyle ]}>{this.props.bottomBannerTextCenter}</Text>
            </LinearGradient>
          </View>
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.Transparent
  },
  image: {
    width: '100%',
    height: '100%',
    minWidth: screenWidth,
    zIndex: -1,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    overflow: 'hidden',
  },
  noBorderRadius: {
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0,
  },
  topRadius: {
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25
  },
  children: {
    zIndex: 1,
    position: 'absolute',
    width: '100%'
  },
  topPadding: {
    paddingTop: 30,
  },
  overlayBackground: {
    position: 'absolute',
    flex: 1,
    width: '100%',
    height: '100%',
  },
  bottomBannerGradient: {
    height: 30,
    width: screenWidth * 0.85,
    borderRadius: 25,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 20
  },
  bottomBannerTextLeftStyle: {
    fontWeight: 'bold',
    fontSize: 14,
  },
  bottomBannerTextRightStyle: {
    fontSize: 12,
  },
  bottomBanner: {
    height: 30,
    width: screenWidth * 0.85,
    borderRadius: 25,
    bottom: 0 - 15,
    left: screenWidth / 2 - (screenWidth * 0.85) / 2,
    position: 'absolute',
  },
  bottomBannerNarrow: {
    width: screenWidth * 0.75,
    left: screenWidth * 0.125
  },
  bottomBannerGradientNarrow: {
    width: screenWidth * 0.75,
  },
  bottomBannerTextCenterStyle: {
    textAlign: 'center',
    width: '100%'
  }
});
