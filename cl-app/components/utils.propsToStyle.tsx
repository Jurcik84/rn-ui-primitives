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
  alignContent: 'flex-start'|'flex-end'|'center'|'stretch'|'space-between'|'space-around';
  alignItems: 'flex-start'| 'flex-end'| 'center'| 'stretch'| 'baseline';
  alignSelf: 'auto'| 'flex-start'| 'flex-end'| 'center'| 'stretch'| 'baseline';
  aspectRatio: number;
  backfaceVisibility: any;
  backgroundColor: any;
  borderBottomColor: any;
  borderBottomLeftRadius: any;
  borderBottomRightRadius: any;
  borderBottomWidth: number;
  borderColor: any;
  borderLeftColor: any;
  borderLeftWidth: number;
  borderRadius: number;
  borderRightColor: any;
  borderRightWidth: number;
  borderStyle: any;
  borderTopColor: any;
  borderTopLeftRadius: any;
  borderTopRightRadius: any;
  borderTopWidth: any;
  borderWidth: number;
  bottom: number | string;
  color: any;
  decomposedMatrix: any;
  direction: 'inherit' | 'ltr' |'rtl';
  display: 'none'| 'flex';
  elevation: any;
  flex: number;
  flexBasis: any;
  flexDirection: 'row' | 'row-reverse'|  'column'|  'column-reverse';
  flexGrow: number;
  flexShrink: number;
  flexWrap: 'wrap'| 'nowrap'| 'wrap-reverse';
  fontFamily: any;
  fontSize: number;
  fontStyle: any;
  fontVariant: any;
  fontWeight: any;
  height: number;
  includeFontPadding: any;
  justifyContent: 'flex-start'| 'flex-end'| 'center'| 'space-between'| 'space-around'| 'space-evenly';
  left: number | string;
  letterSpacing: any;
  lineHeight: any;
  margin: number;
  marginBottom: number;
  marginHorizontal: number | string;
  marginLeft: number;
  marginRight: number;
  marginTop: number;
  marginVertical: number;
  maxHeight: number;
  maxWidth: number;
  minHeight: number;
  minWidth: number;
  opacity: number;
  overflow: any;
  overlayColor: any;
  padding: number | string;
  paddingBottom: number | string;
  paddingHorizontal: number | string;
  paddingLeft: number | string;
  paddingRight: number | string;
  paddingTop: number | string;
  paddingVertical: number | string;
  position: 'absolute'| 'relative';
  resizeMode: any;
  right:number | string;
  rotation: any;
  scaleX: any;
  scaleY: any;
  shadowColor: any;
  shadowOffset: any;
  shadowOpacity: any;
  shadowRadius: any;
  textAlign: 'auto'| 'left'| 'right'| 'center'| 'justify';
  textAlignVertical: any;
  textDecorationColor: any;
  textDecorationLine: any;
  textDecorationStyle: any;
  textShadowColor: any;
  textShadowOffset: any;
  textShadowRadius: any;
  tintColor: any;
  top: number | string;
  transform: any;
  transformMatrix: any;
  translateX: any;
  translateY: any;
  width: number | string;
  writingDirection: any;
  zIndex: number;
};

export type LayoutTypes = {
  children?: JSX.Element[] | JSX.Element;
  style?: {
    [propName: string]: any;
  };
};

export type GeneralObjectType = {[propName: string]: any};

export function transformPropsIntoStyle(
  props: GeneralObjectType
): GeneralObjectType {
  const compStyle: GeneralObjectType = {};
  Object.keys(props).forEach((propName: string) => {
    if (allStylesRN.some((styleProp) => propName === styleProp)) {
      compStyle[propName] = props[propName];
    }
  });
  return compStyle;
}
