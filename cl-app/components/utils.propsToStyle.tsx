const allStylesRN = [
  'alignContent',
  'alignItems',
  'alignSelf',
  'aspectRatio',
  'backfaceVisibility',
  'backgroundColor',
  'borderBottomColor',
  'borderBottomLeftRadius',
  'borderBottomRightRadius',
  'borderBottomWidth',
  'borderColor',
  'borderLeftColor',
  'borderLeftWidth',
  'borderRadius',
  'borderRightColor',
  'borderRightWidth',
  'borderStyle',
  'borderTopColor',
  'borderTopLeftRadius',
  'borderTopRightRadius',
  'borderTopWidth',
  'borderWidth',
  'bottom',
  'color',
  'decomposedMatrix',
  'direction',
  'display',
  'elevation',
  'flex',
  'flexBasis',
  'flexDirection',
  'flexGrow',
  'flexShrink',
  'flexWrap',
  'fontFamily',
  'fontSize',
  'fontStyle',
  'fontVariant',
  'fontWeight',
  'height',
  'includeFontPadding',
  'justifyContent',
  'left',
  'letterSpacing',
  'lineHeight',
  'margin',
  'marginBottom',
  'marginHorizontal',
  'marginLeft',
  'marginRight',
  'marginTop',
  'marginVertical',
  'maxHeight',
  'maxWidth',
  'minHeight',
  'minWidth',
  'opacity',
  'overflow',
  'overlayColor',
  'padding',
  'paddingBottom',
  'paddingHorizontal',
  'paddingLeft',
  'paddingRight',
  'paddingTop',
  'paddingVertical',
  'position',
  'resizeMode',
  'right',
  'rotation',
  'scaleX',
  'scaleY',
  'shadowColor',
  'shadowOffset',
  'shadowOpacity',
  'shadowRadius',
  'textAlign',
  'textAlignVertical',
  'textDecorationColor',
  'textDecorationLine',
  'textDecorationStyle',
  'textShadowColor',
  'textShadowOffset',
  'textShadowRadius',
  'tintColor',
  'top',
  'transform',
  'transformMatrix',
  'translateX',
  'translateY',
  'width',
  'writingDirection',
  'zIndex',
];

export type StylePropStyle = {
  alignContent: any;
  alignItems: any;
  alignSelf: any;
  aspectRatio: any;
  backfaceVisibility: any;
  backgroundColor: any;
  borderBottomColor: any;
  borderBottomLeftRadius: any;
  borderBottomRightRadius: any;
  borderBottomWidth: any;
  borderColor: any;
  borderLeftColor: any;
  borderLeftWidth: any;
  borderRadius: any;
  borderRightColor: any;
  borderRightWidth: any;
  borderStyle: any;
  borderTopColor: any;
  borderTopLeftRadius: any;
  borderTopRightRadius: any;
  borderTopWidth: any;
  borderWidth: any;
  bottom: any;
  color: any;
  decomposedMatrix: any;
  direction: any;
  display: any;
  elevation: any;
  flex: any;
  flexBasis: any;
  flexDirection: any;
  flexGrow: any;
  flexShrink: any;
  flexWrap: any;
  fontFamily: any;
  fontSize: any;
  fontStyle: any;
  fontVariant: any;
  fontWeight: any;
  height: any;
  includeFontPadding: any;
  justifyContent: any;
  left: any;
  letterSpacing: any;
  lineHeight: any;
  margin: any;
  marginBottom: any;
  marginHorizontal: any;
  marginLeft: any;
  marginRight: any;
  marginTop: any;
  marginVertical: any;
  maxHeight: any;
  maxWidth: any;
  minHeight: any;
  minWidth: any;
  opacity: any;
  overflow: any;
  overlayColor: any;
  padding: any;
  paddingBottom: any;
  paddingHorizontal: any;
  paddingLeft: any;
  paddingRight: any;
  paddingTop: any;
  paddingVertical: any;
  position: any;
  resizeMode: any;
  right: any;
  rotation: any;
  scaleX: any;
  scaleY: any;
  shadowColor: any;
  shadowOffset: any;
  shadowOpacity: any;
  shadowRadius: any;
  textAlign: any;
  textAlignVertical: any;
  textDecorationColor: any;
  textDecorationLine: any;
  textDecorationStyle: any;
  textShadowColor: any;
  textShadowOffset: any;
  textShadowRadius: any;
  tintColor: any;
  top: any;
  transform: any;
  transformMatrix: any;
  translateX: any;
  translateY: any;
  width: any;
  writingDirection: any;
  zIndex: any;
};

export type LayoutTypes = {
    children?: JSX.Element[] | JSX.Element;
    style?: {
      [propName: string]: any;
    };
  };

export type GeneralObjectType = {[propName: string]: any};

export function transformPropsIntoStyle(
  props: GeneralObjectType,
): GeneralObjectType {
  const style = {};
  Object.keys(props).forEach((propName: string) => {
    if (allStylesRN.some((styleProp) => propName === styleProp)) {
      style[propName] = props[propName];
    }
  });
  return style;
}
