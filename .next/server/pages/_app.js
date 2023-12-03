"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 6950:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "S": () => (/* binding */ createEmotionCache)
});

;// CONCATENATED MODULE: external "@emotion/cache"
const cache_namespaceObject = require("@emotion/cache");
var cache_default = /*#__PURE__*/__webpack_require__.n(cache_namespaceObject);
;// CONCATENATED MODULE: ./src/@core/utils/create-emotion-cache.ts

const createEmotionCache = ()=>{
    return cache_default()({
        key: 'css'
    });
};


/***/ }),

/***/ 7187:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const themeConfig = {
    // ** Layout Configs
    templateName: 'DAY TO COME' /* App Name */ ,
    mode: 'light' /* light | dark */ ,
    contentWidth: 'boxed' /* full | boxed */ ,
    // ** Routing Configs
    routingLoader: true,
    // ** Navigation (Menu) Configs
    menuTextTruncate: true,
    navigationSize: 260 /* Number in PX(Pixels) /*! Note: This is for Vertical navigation menu only */ ,
    // ** Other Configs
    responsiveFontSizes: true,
    disableRipple: false
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (themeConfig);


/***/ }),

/***/ 4795:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: external "nprogress"
const external_nprogress_namespaceObject = require("nprogress");
var external_nprogress_default = /*#__PURE__*/__webpack_require__.n(external_nprogress_namespaceObject);
;// CONCATENATED MODULE: external "@emotion/react"
const react_namespaceObject = require("@emotion/react");
// EXTERNAL MODULE: ./src/configs/themeConfig.ts
var themeConfig = __webpack_require__(7187);
;// CONCATENATED MODULE: external "@mui/material/CssBaseline"
const CssBaseline_namespaceObject = require("@mui/material/CssBaseline");
var CssBaseline_default = /*#__PURE__*/__webpack_require__.n(CssBaseline_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/GlobalStyles"
const GlobalStyles_namespaceObject = require("@mui/material/GlobalStyles");
var GlobalStyles_default = /*#__PURE__*/__webpack_require__.n(GlobalStyles_namespaceObject);
// EXTERNAL MODULE: external "@mui/material/styles"
var styles_ = __webpack_require__(8442);
;// CONCATENATED MODULE: ./src/@core/theme/overrides/card.ts
const Card = (theme)=>{
    return {
        MuiCard: {
            styleOverrides: {
                root: {
                    boxShadow: theme.shadows[6],
                    '& .card-more-options': {
                        marginTop: theme.spacing(-1),
                        marginRight: theme.spacing(-3)
                    }
                }
            }
        },
        MuiCardHeader: {
            styleOverrides: {
                root: {
                    padding: theme.spacing(5),
                    '& + .MuiCardContent-root, & + .MuiCollapse-root .MuiCardContent-root': {
                        paddingTop: 0
                    },
                    '& .MuiCardHeader-subheader': {
                        fontSize: '0.875rem'
                    }
                },
                title: {
                    lineHeight: 1,
                    fontWeight: 500,
                    fontSize: '1.25rem',
                    letterSpacing: '0.0125em'
                },
                action: {
                    marginTop: 0,
                    marginRight: 0
                }
            }
        },
        MuiCardContent: {
            styleOverrides: {
                root: {
                    padding: theme.spacing(5),
                    '& + .MuiCardContent-root': {
                        paddingTop: 0
                    },
                    '&:last-of-type': {
                        paddingBottom: theme.spacing(5)
                    },
                    '& + .MuiCardActions-root': {
                        paddingTop: 0
                    }
                }
            }
        },
        MuiCardActions: {
            styleOverrides: {
                root: {
                    padding: theme.spacing(5),
                    '&.card-action-dense': {
                        padding: theme.spacing(0, 2.5, 2.5),
                        '.MuiCard-root .MuiCardMedia-root + &': {
                            paddingTop: theme.spacing(2.5)
                        },
                        '.MuiCard-root &:first-of-type': {
                            paddingTop: theme.spacing(5),
                            paddingBottom: theme.spacing(5),
                            '& + .MuiCardContent-root': {
                                paddingTop: 0
                            },
                            '& + .MuiCardHeader-root': {
                                paddingTop: 0
                            }
                        }
                    },
                    '& .MuiButton-text': {
                        paddingLeft: theme.spacing(2.5),
                        paddingRight: theme.spacing(2.5)
                    }
                }
            }
        }
    };
};
/* harmony default export */ const card = (Card);

;// CONCATENATED MODULE: ./src/@core/theme/overrides/chip.ts
const Chip = (theme)=>{
    return {
        MuiChip: {
            styleOverrides: {
                outlined: {
                    '&.MuiChip-colorDefault': {
                        borderColor: `rgba(${theme.palette.customColors.main}, 0.22)`
                    }
                },
                deleteIcon: {
                    width: 18,
                    height: 18
                }
            }
        }
    };
};
/* harmony default export */ const overrides_chip = (Chip);

;// CONCATENATED MODULE: ./src/@core/theme/overrides/link.ts
/* harmony default export */ const overrides_link = ({
    MuiLink: {
        styleOverrides: {
            root: {
                textDecoration: 'none'
            }
        }
    }
});

;// CONCATENATED MODULE: ./src/@core/theme/overrides/list.ts
const List = (theme)=>{
    return {
        MuiListItemIcon: {
            styleOverrides: {
                root: {
                    minWidth: 0,
                    marginRight: theme.spacing(2.25),
                    color: theme.palette.text.secondary
                }
            }
        },
        MuiListItemAvatar: {
            styleOverrides: {
                root: {
                    minWidth: 0,
                    marginRight: theme.spacing(4)
                }
            }
        },
        MuiListItemText: {
            styleOverrides: {
                dense: {
                    '& .MuiListItemText-primary': {
                        color: theme.palette.text.primary
                    }
                }
            }
        },
        MuiListSubheader: {
            styleOverrides: {
                root: {
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    color: theme.palette.text.primary
                }
            }
        }
    };
};
/* harmony default export */ const overrides_list = (List);

;// CONCATENATED MODULE: ./src/@core/theme/overrides/menu.ts
const Menu = (theme)=>{
    return {
        MuiMenu: {
            styleOverrides: {
                root: {
                    '& .MuiMenu-paper': {
                        borderRadius: 5,
                        boxShadow: theme.palette.mode === 'light' ? theme.shadows[8] : theme.shadows[9]
                    }
                }
            }
        }
    };
};
/* harmony default export */ const overrides_menu = (Menu);

;// CONCATENATED MODULE: ./src/@core/theme/overrides/tabs.ts
const Tabs = (theme)=>{
    return {
        MuiTabs: {
            styleOverrides: {
                vertical: {
                    minWidth: 130,
                    marginRight: theme.spacing(4),
                    borderRight: `1px solid ${theme.palette.divider}`,
                    '& .MuiTab-root': {
                        minWidth: 130
                    }
                }
            }
        },
        MuiTab: {
            styleOverrides: {
                textColorSecondary: {
                    '&.Mui-selected': {
                        color: theme.palette.text.secondary
                    }
                }
            }
        }
    };
};
/* harmony default export */ const overrides_tabs = (Tabs);

;// CONCATENATED MODULE: ./src/@core/theme/overrides/input.ts
const input = (theme)=>{
    return {
        MuiInputLabel: {
            styleOverrides: {
                root: {
                    color: theme.palette.text.secondary
                }
            }
        },
        MuiInput: {
            styleOverrides: {
                root: {
                    '&:before': {
                        borderBottom: `1px solid rgba(${theme.palette.customColors.main}, 0.22)`
                    },
                    '&:hover:not(.Mui-disabled):before': {
                        borderBottom: `1px solid rgba(${theme.palette.customColors.main}, 0.32)`
                    },
                    '&.Mui-disabled:before': {
                        borderBottom: `1px solid ${theme.palette.text.disabled}`
                    }
                }
            }
        },
        MuiFilledInput: {
            styleOverrides: {
                root: {
                    backgroundColor: `rgba(${theme.palette.customColors.main}, 0.04)`,
                    '&:hover:not(.Mui-disabled)': {
                        backgroundColor: `rgba(${theme.palette.customColors.main}, 0.08)`
                    },
                    '&:before': {
                        borderBottom: `1px solid rgba(${theme.palette.customColors.main}, 0.22)`
                    },
                    '&:hover:not(.Mui-disabled):before': {
                        borderBottom: `1px solid rgba(${theme.palette.customColors.main}, 0.32)`
                    }
                }
            }
        },
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    '&:hover:not(.Mui-focused) .MuiOutlinedInput-notchedOutline': {
                        borderColor: `rgba(${theme.palette.customColors.main}, 0.32)`
                    },
                    '&:hover.Mui-error .MuiOutlinedInput-notchedOutline': {
                        borderColor: theme.palette.error.main
                    },
                    '& .MuiOutlinedInput-notchedOutline': {
                        borderColor: `rgba(${theme.palette.customColors.main}, 0.22)`
                    },
                    '&.Mui-disabled .MuiOutlinedInput-notchedOutline': {
                        borderColor: theme.palette.text.disabled
                    }
                }
            }
        }
    };
};
/* harmony default export */ const overrides_input = (input);

;// CONCATENATED MODULE: ./src/@core/theme/overrides/paper.ts
/* harmony default export */ const paper = ({
    MuiPaper: {
        styleOverrides: {
            root: {
                backgroundImage: 'none'
            }
        }
    }
});

;// CONCATENATED MODULE: ./src/@core/theme/overrides/table.ts
const Table = (theme)=>{
    return {
        MuiTableContainer: {
            styleOverrides: {
                root: {
                    boxShadow: theme.shadows[0],
                    borderTopColor: theme.palette.divider
                }
            }
        },
        MuiTableHead: {
            styleOverrides: {
                root: {
                    textTransform: 'uppercase',
                    '& .MuiTableCell-head': {
                        fontSize: '0.75rem',
                        fontWeight: 600,
                        letterSpacing: '0.13px'
                    }
                }
            }
        },
        MuiTableBody: {
            styleOverrides: {
                root: {
                    '& .MuiTableCell-body': {
                        letterSpacing: '0.25px',
                        color: theme.palette.text.secondary,
                        '&:not(.MuiTableCell-sizeSmall):not(.MuiTableCell-paddingCheckbox):not(.MuiTableCell-paddingNone)': {
                            paddingTop: theme.spacing(3.5),
                            paddingBottom: theme.spacing(3.5)
                        }
                    }
                }
            }
        },
        MuiTableRow: {
            styleOverrides: {
                root: {
                    '& .MuiTableCell-head:first-child, & .MuiTableCell-root:first-child ': {
                        paddingLeft: theme.spacing(5)
                    },
                    '& .MuiTableCell-head:last-child, & .MuiTableCell-root:last-child': {
                        paddingRight: theme.spacing(5)
                    }
                }
            }
        },
        MuiTableCell: {
            styleOverrides: {
                root: {
                    borderBottom: `1px solid ${theme.palette.divider}`,
                    '& .MuiButton-root': {
                        textTransform: 'uppercase',
                        color: theme.palette.text.secondary
                    }
                },
                stickyHeader: {
                    backgroundColor: theme.palette.customColors.tableHeaderBg
                }
            }
        }
    };
};
/* harmony default export */ const table = (Table);

// EXTERNAL MODULE: ./src/@core/utils/hex-to-rgba.ts
var hex_to_rgba = __webpack_require__(969);
;// CONCATENATED MODULE: ./src/@core/theme/overrides/alerts.ts

// ** Util Import

const Alert = (theme)=>{
    const getColor = theme.palette.mode === 'light' ? styles_.darken : styles_.lighten;
    return {
        MuiAlert: {
            styleOverrides: {
                root: {
                    borderRadius: 5,
                    '& .MuiAlertTitle-root': {
                        marginBottom: theme.spacing(1.6)
                    },
                    '& a': {
                        color: 'inherit',
                        fontWeight: 500
                    }
                },
                standardSuccess: {
                    color: getColor(theme.palette.success.main, 0.12),
                    backgroundColor: (0,hex_to_rgba/* hexToRGBA */.E)(theme.palette.success.main, 0.12),
                    '& .MuiAlertTitle-root': {
                        color: getColor(theme.palette.success.main, 0.12)
                    },
                    '& .MuiAlert-icon': {
                        color: getColor(theme.palette.success.main, 0.12)
                    }
                },
                standardInfo: {
                    color: getColor(theme.palette.info.main, 0.12),
                    backgroundColor: (0,hex_to_rgba/* hexToRGBA */.E)(theme.palette.info.main, 0.12),
                    '& .MuiAlertTitle-root': {
                        color: getColor(theme.palette.info.main, 0.12)
                    },
                    '& .MuiAlert-icon': {
                        color: getColor(theme.palette.info.main, 0.12)
                    }
                },
                standardWarning: {
                    color: getColor(theme.palette.warning.main, 0.12),
                    backgroundColor: (0,hex_to_rgba/* hexToRGBA */.E)(theme.palette.warning.main, 0.12),
                    '& .MuiAlertTitle-root': {
                        color: getColor(theme.palette.warning.main, 0.12)
                    },
                    '& .MuiAlert-icon': {
                        color: getColor(theme.palette.warning.main, 0.12)
                    }
                },
                standardError: {
                    color: getColor(theme.palette.error.main, 0.12),
                    backgroundColor: (0,hex_to_rgba/* hexToRGBA */.E)(theme.palette.error.main, 0.12),
                    '& .MuiAlertTitle-root': {
                        color: getColor(theme.palette.error.main, 0.12)
                    },
                    '& .MuiAlert-icon': {
                        color: getColor(theme.palette.error.main, 0.12)
                    }
                },
                outlinedSuccess: {
                    borderColor: theme.palette.success.main,
                    color: getColor(theme.palette.success.main, 0.12),
                    '& .MuiAlertTitle-root': {
                        color: getColor(theme.palette.success.main, 0.12)
                    },
                    '& .MuiAlert-icon': {
                        color: getColor(theme.palette.success.main, 0.12)
                    }
                },
                outlinedInfo: {
                    borderColor: theme.palette.info.main,
                    color: getColor(theme.palette.info.main, 0.12),
                    '& .MuiAlertTitle-root': {
                        color: getColor(theme.palette.info.main, 0.12)
                    },
                    '& .MuiAlert-icon': {
                        color: getColor(theme.palette.info.main, 0.12)
                    }
                },
                outlinedWarning: {
                    borderColor: theme.palette.warning.main,
                    color: getColor(theme.palette.warning.main, 0.12),
                    '& .MuiAlertTitle-root': {
                        color: getColor(theme.palette.warning.main, 0.12)
                    },
                    '& .MuiAlert-icon': {
                        color: getColor(theme.palette.warning.main, 0.12)
                    }
                },
                outlinedError: {
                    borderColor: theme.palette.error.main,
                    color: getColor(theme.palette.error.main, 0.12),
                    '& .MuiAlertTitle-root': {
                        color: getColor(theme.palette.error.main, 0.12)
                    },
                    '& .MuiAlert-icon': {
                        color: getColor(theme.palette.error.main, 0.12)
                    }
                },
                filled: {
                    fontWeight: 400
                }
            }
        }
    };
};
/* harmony default export */ const overrides_alerts = (Alert);

;// CONCATENATED MODULE: ./src/@core/theme/overrides/button.ts
// ** Theme Config Imports

const Button = (theme)=>{
    return {
        MuiButton: {
            styleOverrides: {
                root: {
                    fontWeight: 500,
                    borderRadius: 5,
                    lineHeight: 1.71,
                    letterSpacing: '0.3px',
                    padding: `${theme.spacing(1.875, 3)}`
                },
                contained: {
                    boxShadow: theme.shadows[3],
                    padding: `${theme.spacing(1.875, 5.5)}`
                },
                outlined: {
                    padding: `${theme.spacing(1.625, 5.25)}`
                },
                sizeSmall: {
                    padding: `${theme.spacing(1, 2.25)}`,
                    '&.MuiButton-contained': {
                        padding: `${theme.spacing(1, 3.5)}`
                    },
                    '&.MuiButton-outlined': {
                        padding: `${theme.spacing(0.75, 3.25)}`
                    }
                },
                sizeLarge: {
                    padding: `${theme.spacing(2.125, 5.5)}`,
                    '&.MuiButton-contained': {
                        padding: `${theme.spacing(2.125, 6.5)}`
                    },
                    '&.MuiButton-outlined': {
                        padding: `${theme.spacing(1.875, 6.25)}`
                    }
                }
            }
        },
        MuiButtonBase: {
            defaultProps: {
                disableRipple: themeConfig/* default.disableRipple */.Z.disableRipple
            }
        }
    };
};
/* harmony default export */ const overrides_button = (Button);

;// CONCATENATED MODULE: ./src/@core/theme/overrides/dialog.ts
// ** Util Import

const Dialog = (theme)=>{
    return {
        MuiDialog: {
            styleOverrides: {
                paper: {
                    boxShadow: theme.shadows[6],
                    '&:not(.MuiDialog-paperFullScreen)': {
                        '@media (max-width:599px)': {
                            margin: theme.spacing(4),
                            width: `calc(100% - ${theme.spacing(8)})`,
                            maxWidth: `calc(100% - ${theme.spacing(8)}) !important`
                        }
                    },
                    '& > .MuiList-root': {
                        paddingLeft: theme.spacing(1),
                        paddingRight: theme.spacing(1)
                    }
                }
            }
        },
        MuiDialogTitle: {
            styleOverrides: {
                root: {
                    padding: theme.spacing(5)
                }
            }
        },
        MuiDialogContent: {
            styleOverrides: {
                root: {
                    padding: theme.spacing(5),
                    '& + .MuiDialogContent-root': {
                        paddingTop: 0
                    },
                    '& + .MuiDialogActions-root': {
                        paddingTop: 0
                    },
                    // Styling for Mobile Date Picker starts
                    '& .PrivatePickersToolbar-root': {
                        padding: theme.spacing(4, 5),
                        color: theme.palette.primary.contrastText,
                        backgroundColor: theme.palette.primary.main,
                        '& .MuiTypography-root': {
                            color: theme.palette.primary.contrastText
                        },
                        '& span.MuiTypography-overline': {
                            fontSize: '1rem',
                            lineHeight: '24px',
                            letterSpacing: '0.15px'
                        },
                        '& ~ div[class^="css-"] > div[class^="css-"]': {
                            marginTop: theme.spacing(6),
                            marginBottom: theme.spacing(6),
                            '& > div[class^="css-"]': {
                                backgroundColor: theme.palette.mode === 'light' ? theme.palette.grey[50] : theme.palette.background.default,
                                '& ~ .MuiIconButton-root span.MuiTypography-caption': {
                                    color: 'inherit'
                                }
                            }
                        },
                        '& .PrivateTimePickerToolbar-hourMinuteLabel': {
                            alignItems: 'center',
                            '& > .MuiButton-root span.MuiTypography-root': {
                                fontWeight: 300,
                                lineHeight: '72px',
                                fontSize: '3.75rem',
                                letterSpacing: '-0.5px'
                            },
                            '& > .MuiTypography-root': {
                                color: (0,hex_to_rgba/* hexToRGBA */.E)(theme.palette.primary.contrastText, 0.54),
                                '& + .MuiButton-root > span.MuiTypography-root': {
                                    color: (0,hex_to_rgba/* hexToRGBA */.E)(theme.palette.primary.contrastText, 0.54)
                                }
                            }
                        },
                        '& .PrivateTimePickerToolbar-ampmSelection span.MuiTypography-root:not(.Mui-selected)': {
                            color: (0,hex_to_rgba/* hexToRGBA */.E)(theme.palette.primary.contrastText, 0.54)
                        }
                    }
                }
            }
        },
        MuiDialogActions: {
            styleOverrides: {
                root: {
                    padding: theme.spacing(5),
                    '&.dialog-actions-dense': {
                        padding: theme.spacing(2.5),
                        paddingTop: 0
                    }
                }
            }
        }
    };
};
/* harmony default export */ const overrides_dialog = (Dialog);

;// CONCATENATED MODULE: ./src/@core/theme/overrides/rating.ts
const Rating = (theme)=>{
    return {
        MuiRating: {
            styleOverrides: {
                root: {
                    color: theme.palette.warning.main
                }
            }
        }
    };
};
/* harmony default export */ const overrides_rating = (Rating);

;// CONCATENATED MODULE: ./src/@core/theme/overrides/select.ts
/* harmony default export */ const overrides_select = ({
    MuiSelect: {
        styleOverrides: {
            select: {
                minWidth: '6rem !important',
                '&.MuiTablePagination-select': {
                    minWidth: '1rem !important'
                }
            }
        }
    }
});

;// CONCATENATED MODULE: ./src/@core/theme/overrides/avatars.ts
const Avatar = (theme)=>{
    return {
        MuiAvatar: {
            styleOverrides: {
                colorDefault: {
                    color: theme.palette.text.secondary,
                    backgroundColor: theme.palette.mode === 'light' ? theme.palette.grey[200] : theme.palette.grey[700]
                },
                rounded: {
                    borderRadius: 5
                }
            }
        },
        MuiAvatarGroup: {
            styleOverrides: {
                root: {
                    justifyContent: 'flex-end',
                    '.MuiCard-root & .MuiAvatar-root': {
                        borderColor: theme.palette.background.paper
                    }
                }
            }
        }
    };
};
/* harmony default export */ const overrides_avatars = (Avatar);

;// CONCATENATED MODULE: ./src/@core/theme/overrides/divider.ts
const Divider = (theme)=>{
    return {
        MuiDivider: {
            styleOverrides: {
                root: {
                    margin: `${theme.spacing(2)} 0`
                }
            }
        }
    };
};
/* harmony default export */ const overrides_divider = (Divider);

;// CONCATENATED MODULE: ./src/@core/theme/overrides/popover.ts
const Popover = (theme)=>{
    return {
        MuiPopover: {
            styleOverrides: {
                root: {
                    '& .MuiPopover-paper': {
                        boxShadow: theme.shadows[6]
                    }
                }
            }
        }
    };
};
/* harmony default export */ const overrides_popover = (Popover);

;// CONCATENATED MODULE: ./src/@core/theme/overrides/tooltip.ts
// ** Util Import

const Tooltip = (theme)=>{
    return {
        MuiTooltip: {
            styleOverrides: {
                tooltip: {
                    backgroundColor: theme.palette.mode === 'light' ? (0,hex_to_rgba/* hexToRGBA */.E)(theme.palette.grey[900], 0.9) : (0,hex_to_rgba/* hexToRGBA */.E)(theme.palette.grey[700], 0.9)
                },
                arrow: {
                    color: theme.palette.mode === 'light' ? (0,hex_to_rgba/* hexToRGBA */.E)(theme.palette.grey[900], 0.9) : (0,hex_to_rgba/* hexToRGBA */.E)(theme.palette.grey[700], 0.9)
                }
            }
        }
    };
};
/* harmony default export */ const overrides_tooltip = (Tooltip);

;// CONCATENATED MODULE: ./src/@core/theme/overrides/backdrop.ts
// ** Util Import

const Backdrop = (theme)=>{
    return {
        MuiBackdrop: {
            styleOverrides: {
                root: {
                    backgroundColor: theme.palette.mode === 'light' ? `rgba(${theme.palette.customColors.main}, 0.7)` : (0,hex_to_rgba/* hexToRGBA */.E)(theme.palette.background.default, 0.7)
                },
                invisible: {
                    backgroundColor: 'transparent'
                }
            }
        }
    };
};
/* harmony default export */ const overrides_backdrop = (Backdrop);

;// CONCATENATED MODULE: ./src/@core/theme/overrides/snackbar.ts
const Snackbar = (theme)=>{
    return {
        MuiSnackbarContent: {
            styleOverrides: {
                root: {
                    backgroundColor: theme.palette.mode === 'light' ? theme.palette.grey[900] : theme.palette.grey[100]
                }
            }
        }
    };
};
/* harmony default export */ const overrides_snackbar = (Snackbar);

;// CONCATENATED MODULE: ./src/@core/theme/overrides/switches.ts
const Switch = (theme)=>{
    return {
        MuiSwitch: {
            styleOverrides: {
                root: {
                    '& .MuiSwitch-track': {
                        backgroundColor: `rgb(${theme.palette.customColors.main})`
                    }
                }
            }
        }
    };
};
/* harmony default export */ const overrides_switches = (Switch);

;// CONCATENATED MODULE: ./src/@core/theme/overrides/timeline.ts
// ** Util Import

const Timeline = (theme)=>{
    return {
        MuiTimelineItem: {
            styleOverrides: {
                root: {
                    '&:not(:last-of-type)': {
                        '& .MuiTimelineContent-root': {
                            marginBottom: theme.spacing(4)
                        }
                    }
                }
            }
        },
        MuiTimelineConnector: {
            styleOverrides: {
                root: {
                    backgroundColor: theme.palette.divider
                }
            }
        },
        MuiTimelineContent: {
            styleOverrides: {
                root: {
                    marginTop: theme.spacing(0.5)
                }
            }
        },
        MuiTimelineDot: {
            styleOverrides: {
                filledPrimary: {
                    boxShadow: `0 0 0 3px ${(0,hex_to_rgba/* hexToRGBA */.E)(theme.palette.primary.main, 0.12)}`
                },
                filledSecondary: {
                    boxShadow: `0 0 0 3px ${(0,hex_to_rgba/* hexToRGBA */.E)(theme.palette.secondary.main, 0.12)}`
                },
                filledSuccess: {
                    boxShadow: `0 0 0 3px ${(0,hex_to_rgba/* hexToRGBA */.E)(theme.palette.success.main, 0.12)}`
                },
                filledError: {
                    boxShadow: `0 0 0 3px ${(0,hex_to_rgba/* hexToRGBA */.E)(theme.palette.error.main, 0.12)}`
                },
                filledWarning: {
                    boxShadow: `0 0 0 3px ${(0,hex_to_rgba/* hexToRGBA */.E)(theme.palette.warning.main, 0.12)}`
                },
                filledInfo: {
                    boxShadow: `0 0 0 3px ${(0,hex_to_rgba/* hexToRGBA */.E)(theme.palette.info.main, 0.12)}`
                },
                filledGrey: {
                    boxShadow: `0 0 0 3px ${(0,hex_to_rgba/* hexToRGBA */.E)(theme.palette.grey[400], 0.12)}`
                },
                outlinedPrimary: {
                    '& svg': {
                        color: theme.palette.primary.main
                    }
                },
                outlinedSecondary: {
                    '& svg': {
                        color: theme.palette.secondary.main
                    }
                },
                outlinedSuccess: {
                    '& svg': {
                        color: theme.palette.success.main
                    }
                },
                outlinedError: {
                    '& svg': {
                        color: theme.palette.error.main
                    }
                },
                outlinedWarning: {
                    '& svg': {
                        color: theme.palette.warning.main
                    }
                },
                outlinedInfo: {
                    '& svg': {
                        color: theme.palette.info.main
                    }
                },
                outlinedGrey: {
                    '& svg': {
                        color: theme.palette.grey[500]
                    }
                }
            }
        }
    };
};
/* harmony default export */ const overrides_timeline = (Timeline);

;// CONCATENATED MODULE: ./src/@core/theme/overrides/accordion.ts
const Accordion = (theme)=>{
    return {
        MuiAccordion: {
            styleOverrides: {
                root: {
                    '&.Mui-disabled': {
                        backgroundColor: `rgba(${theme.palette.customColors.main}, 0.12)`
                    },
                    '&.Mui-expanded': {
                        boxShadow: theme.shadows[3]
                    }
                }
            }
        },
        MuiAccordionSummary: {
            styleOverrides: {
                root: {
                    padding: `0 ${theme.spacing(5)}`,
                    '& + .MuiCollapse-root': {
                        '& .MuiAccordionDetails-root:first-child': {
                            paddingTop: 0
                        }
                    }
                },
                content: {
                    margin: `${theme.spacing(2.5)} 0`
                },
                expandIconWrapper: {
                    color: theme.palette.text.secondary
                }
            }
        },
        MuiAccordionDetails: {
            styleOverrides: {
                root: {
                    padding: theme.spacing(5),
                    '& + .MuiAccordionDetails-root': {
                        paddingTop: 0
                    }
                }
            }
        }
    };
};
/* harmony default export */ const overrides_accordion = (Accordion);

;// CONCATENATED MODULE: ./src/@core/theme/overrides/pagination.ts
// ** Util Import

const Pagination = (theme)=>{
    return {
        MuiPaginationItem: {
            styleOverrides: {
                root: {
                    '&.Mui-selected:not(.Mui-disabled):not(.MuiPaginationItem-textPrimary):not(.MuiPaginationItem-textSecondary):hover': {
                        backgroundColor: `rgba(${theme.palette.customColors.main}, 0.12)`
                    }
                },
                outlined: {
                    borderColor: `rgba(${theme.palette.customColors.main}, 0.22)`
                },
                outlinedPrimary: {
                    '&.Mui-selected': {
                        backgroundColor: (0,hex_to_rgba/* hexToRGBA */.E)(theme.palette.primary.main, 0.12),
                        '&:hover': {
                            backgroundColor: `${(0,hex_to_rgba/* hexToRGBA */.E)(theme.palette.primary.main, 0.2)} !important`
                        }
                    }
                },
                outlinedSecondary: {
                    '&.Mui-selected': {
                        backgroundColor: (0,hex_to_rgba/* hexToRGBA */.E)(theme.palette.secondary.main, 0.12),
                        '&:hover': {
                            backgroundColor: `${(0,hex_to_rgba/* hexToRGBA */.E)(theme.palette.secondary.main, 0.2)} !important`
                        }
                    }
                }
            }
        }
    };
};
/* harmony default export */ const overrides_pagination = (Pagination);

;// CONCATENATED MODULE: ./src/@core/theme/overrides/typography.ts
const Typography = (theme)=>{
    return {
        MuiTypography: {
            styleOverrides: {
                gutterBottom: {
                    marginBottom: theme.spacing(2)
                }
            }
        }
    };
};
/* harmony default export */ const typography = (Typography);

;// CONCATENATED MODULE: ./src/@core/theme/overrides/toggleButton.ts
/* harmony default export */ const toggleButton = ({
    MuiToggleButtonGroup: {
        styleOverrides: {
            root: {
                borderRadius: 4
            }
        }
    },
    MuiToggleButton: {
        styleOverrides: {
            root: {
                borderRadius: 4
            }
        }
    }
});

;// CONCATENATED MODULE: ./src/@core/theme/overrides/dateTimePicker.ts
const DateTimePicker = (theme)=>{
    return {
        MuiCalendarPicker: {
            styleOverrides: {
                root: {
                    '& [role="presentation"]': {
                        fontWeight: 400,
                        '& .PrivatePickersFadeTransitionGroup-root + .PrivatePickersFadeTransitionGroup-root > div': {
                            marginRight: 0
                        },
                        '& .MuiIconButton-sizeSmall': {
                            padding: theme.spacing(0.5)
                        },
                        '& + div .MuiIconButton-root:not(.Mui-disabled)': {
                            color: theme.palette.text.secondary
                        }
                    },
                    '& .PrivatePickersSlideTransition-root': {
                        minHeight: 240
                    }
                }
            }
        },
        MuiPickersDay: {
            styleOverrides: {
                root: {
                    fontSize: '0.875rem'
                }
            }
        },
        MuiClockPicker: {
            styleOverrides: {
                arrowSwitcher: {
                    '& .MuiIconButton-root:not(.Mui-disabled)': {
                        color: theme.palette.text.secondary
                    },
                    '& + div': {
                        '& > div': {
                            backgroundColor: theme.palette.mode === 'light' ? theme.palette.grey[50] : theme.palette.background.default,
                            '& ~ .MuiIconButton-root span.MuiTypography-caption': {
                                color: 'inherit'
                            }
                        }
                    }
                }
            }
        },
        MuiMonthPicker: {
            styleOverrides: {
                root: {
                    '& > .MuiTypography-root.Mui-selected': {
                        fontSize: '1rem'
                    }
                }
            }
        }
    };
};
/* harmony default export */ const overrides_dateTimePicker = (DateTimePicker);

;// CONCATENATED MODULE: ./src/@core/theme/overrides/index.ts
// ** Overrides Imports



























const Overrides = (theme)=>{
    const chip = overrides_chip(theme);
    const list = overrides_list(theme);
    const menu = overrides_menu(theme);
    const tabs = overrides_tabs(theme);
    const cards = card(theme);
    const input = overrides_input(theme);
    const tables = table(theme);
    const alerts = overrides_alerts(theme);
    const button = overrides_button(theme);
    const rating = overrides_rating(theme);
    const avatars = overrides_avatars(theme);
    const divider = overrides_divider(theme);
    const dialog = overrides_dialog(theme);
    const popover = overrides_popover(theme);
    const tooltip = overrides_tooltip(theme);
    const backdrop = overrides_backdrop(theme);
    const snackbar = overrides_snackbar(theme);
    const switches = overrides_switches(theme);
    const timeline = overrides_timeline(theme);
    const accordion = overrides_accordion(theme);
    const pagination = overrides_pagination(theme);
    const dateTimePicker = overrides_dateTimePicker(theme);
    return Object.assign(chip, list, menu, tabs, cards, input, alerts, button, dialog, rating, tables, avatars, divider, overrides_link, popover, tooltip, backdrop, paper, snackbar, switches, timeline, accordion, overrides_select, pagination, typography, dateTimePicker, toggleButton);
};
/* harmony default export */ const overrides = (Overrides);

;// CONCATENATED MODULE: ./src/@core/theme/typography/index.ts
const typography_Typography = (theme)=>{
    return {
        h1: {
            fontWeight: 500,
            letterSpacing: '-1.5px',
            color: theme.palette.text.primary
        },
        h2: {
            fontWeight: 500,
            letterSpacing: '-0.5px',
            color: theme.palette.text.primary
        },
        h3: {
            fontWeight: 500,
            letterSpacing: 0,
            color: theme.palette.text.primary
        },
        h4: {
            fontWeight: 500,
            letterSpacing: '0.25px',
            color: theme.palette.text.primary
        },
        h5: {
            fontWeight: 500,
            letterSpacing: 0,
            color: theme.palette.text.primary
        },
        h6: {
            letterSpacing: '0.15px',
            color: theme.palette.text.primary
        },
        subtitle1: {
            letterSpacing: '0.15px',
            color: theme.palette.text.primary
        },
        subtitle2: {
            letterSpacing: '0.1px',
            color: theme.palette.text.secondary
        },
        body1: {
            letterSpacing: '0.15px',
            color: theme.palette.text.primary
        },
        body2: {
            lineHeight: 1.5,
            letterSpacing: '0.15px',
            color: theme.palette.text.secondary
        },
        button: {
            letterSpacing: '0.3px',
            color: theme.palette.text.primary
        },
        caption: {
            letterSpacing: '0.4px',
            color: theme.palette.text.secondary
        },
        overline: {
            letterSpacing: '1px',
            color: theme.palette.text.secondary
        }
    };
};
/* harmony default export */ const theme_typography = (typography_Typography);

;// CONCATENATED MODULE: external "@mui/utils"
const utils_namespaceObject = require("@mui/utils");
;// CONCATENATED MODULE: ./src/@core/theme/palette/index.ts
const DefaultPalette = (mode, themeColor)=>{
    // ** Vars
    const lightColor = '58, 53, 65';
    const darkColor = '231, 227, 252';
    const mainColor = mode === 'light' ? lightColor : darkColor;
    const primaryGradient = ()=>{
        if (themeColor === 'primary') {
            return '#C6A7FE';
        } else if (themeColor === 'secondary') {
            return '#9C9FA4';
        } else if (themeColor === 'success') {
            return '#93DD5C';
        } else if (themeColor === 'error') {
            return '#FF8C90';
        } else if (themeColor === 'warning') {
            return '#FFCF5C';
        } else {
            return '#6ACDFF';
        }
    };
    return {
        customColors: {
            main: mainColor,
            primaryGradient: primaryGradient(),
            tableHeaderBg: mode === 'light' ? '#F9FAFC' : '#3D3759'
        },
        common: {
            black: '#000',
            white: '#FFF'
        },
        mode: mode,
        primary: {
            light: '#9E69FD',
            main: '#9155FD',
            dark: '#804BDF',
            contrastText: '#FFF'
        },
        secondary: {
            light: '#9C9FA4',
            main: '#8A8D93',
            dark: '#777B82',
            contrastText: '#FFF'
        },
        success: {
            light: '#6AD01F',
            main: '#56CA00',
            dark: '#4CB200',
            contrastText: '#FFF'
        },
        error: {
            light: '#FF6166',
            main: '#FF4C51',
            dark: '#E04347',
            contrastText: '#FFF'
        },
        warning: {
            light: '#FFCA64',
            main: '#FFB400',
            dark: '#E09E00',
            contrastText: '#FFF'
        },
        info: {
            light: '#32BAFF',
            main: '#16B1FF',
            dark: '#139CE0',
            contrastText: '#FFF'
        },
        grey: {
            50: '#FAFAFA',
            100: '#F5F5F5',
            200: '#EEEEEE',
            300: '#E0E0E0',
            400: '#BDBDBD',
            500: '#9E9E9E',
            600: '#757575',
            700: '#616161',
            800: '#424242',
            900: '#212121',
            A100: '#D5D5D5',
            A200: '#AAAAAA',
            A400: '#616161',
            A700: '#303030'
        },
        text: {
            primary: `rgba(${mainColor}, 0.87)`,
            secondary: `rgba(${mainColor}, 0.68)`,
            disabled: `rgba(${mainColor}, 0.38)`
        },
        divider: `rgba(${mainColor}, 0.12)`,
        background: {
            paper: mode === 'light' ? '#FFF' : '#312D4B',
            default: mode === 'light' ? '#F4F5FA' : '#28243D'
        },
        action: {
            active: `rgba(${mainColor}, 0.54)`,
            hover: `rgba(${mainColor}, 0.04)`,
            selected: `rgba(${mainColor}, 0.08)`,
            disabled: `rgba(${mainColor}, 0.3)`,
            disabledBackground: `rgba(${mainColor}, 0.18)`,
            focus: `rgba(${mainColor}, 0.12)`
        }
    };
};
/* harmony default export */ const palette = (DefaultPalette);

;// CONCATENATED MODULE: ./src/@core/theme/spacing/index.ts
/* harmony default export */ const spacing = ({
    spacing: (factor)=>`${0.25 * factor}rem`
});

;// CONCATENATED MODULE: ./src/@core/theme/shadows/index.ts
const Shadows = (mode)=>{
    if (mode === 'light') {
        return [
            'none',
            '0px 2px 1px -1px rgba(58, 53, 65, 0.2), 0px 1px 1px 0px rgba(58, 53, 65, 0.14), 0px 1px 3px 0px rgba(58, 53, 65, 0.12)',
            '0px 3px 1px -2px rgba(58, 53, 65, 0.2), 0px 2px 2px 0px rgba(58, 53, 65, 0.14), 0px 1px 5px 0px rgba(58, 53, 65, 0.12)',
            '0px 4px 8px -4px rgba(58, 53, 65, 0.42)',
            '0px 6px 18px -8px rgba(58, 53, 65, 0.56)',
            '0px 3px 5px -1px rgba(58, 53, 65, 0.2), 0px 5px 8px 0px rgba(58, 53, 65, 0.14), 0px 1px 14px 0px rgba(58, 53, 65, 0.12)',
            '0px 2px 10px 0px rgba(58, 53, 65, 0.1)',
            '0px 4px 5px -2px rgba(58, 53, 65, 0.2), 0px 7px 10px 1px rgba(58, 53, 65, 0.14), 0px 2px 16px 1px rgba(58, 53, 65, 0.12)',
            '0px 5px 5px -3px rgba(58, 53, 65, 0.2), 0px 8px 10px 1px rgba(58, 53, 65, 0.14), 0px 3px 14px 2px rgba(58, 53, 65, 0.12)',
            '0px 5px 6px -3px rgba(58, 53, 65, 0.2), 0px 9px 12px 1px rgba(58, 53, 65, 0.14), 0px 3px 16px 2px rgba(58, 53, 65, 0.12)',
            '0px 6px 6px -3px rgba(58, 53, 65, 0.2), 0px 10px 14px 1px rgba(58, 53, 65, 0.14), 0px 4px 18px 3px rgba(58, 53, 65, 0.12)',
            '0px 6px 7px -4px rgba(58, 53, 65, 0.2), 0px 11px 15px 1px rgba(58, 53, 65, 0.14), 0px 4px 20px 3px rgba(58, 53, 65, 0.12)',
            '0px 7px 8px -4px rgba(58, 53, 65, 0.2), 0px 12px 17px 2px rgba(58, 53, 65, 0.14), 0px 5px 22px 4px rgba(58, 53, 65, 0.12)',
            '0px 7px 8px -4px rgba(58, 53, 65, 0.2), 0px 13px 19px 2px rgba(58, 53, 65, 0.14), 0px 5px 24px 4px rgba(58, 53, 65, 0.12)',
            '0px 7px 9px -4px rgba(58, 53, 65, 0.2), 0px 14px 21px 2px rgba(58, 53, 65, 0.14), 0px 5px 26px 4px rgba(58, 53, 65, 0.12)',
            '0px 8px 9px -5px rgba(58, 53, 65, 0.2), 0px 15px 22px 2px rgba(58, 53, 65, 0.14), 0px 6px 28px 5px rgba(58, 53, 65, 0.12)',
            '0px 8px 10px -5px rgba(58, 53, 65, 0.2), 0px 16px 24px 2px rgba(58, 53, 65, 0.14), 0px 6px 30px 5px rgba(58, 53, 65, 0.12)',
            '0px 8px 11px -5px rgba(58, 53, 65, 0.2), 0px 17px 26px 2px rgba(58, 53, 65, 0.14), 0px 6px 32px 5px rgba(58, 53, 65, 0.12)',
            '0px 9px 11px -5px rgba(58, 53, 65, 0.2), 0px 18px 28px 2px rgba(58, 53, 65, 0.14), 0px 7px 34px 6px rgba(58, 53, 65, 0.12)',
            '0px 9px 12px -6px rgba(58, 53, 65, 0.2), 0px 19px 29px 2px rgba(58, 53, 65, 0.14), 0px 7px 36px 6px rgba(58, 53, 65, 0.12)',
            '0px 10px 13px -6px rgba(58, 53, 65, 0.2), 0px 20px 31px 3px rgba(58, 53, 65, 0.14), 0px 8px 38px 7px rgba(58, 53, 65, 0.12)',
            '0px 10px 13px -6px rgba(58, 53, 65, 0.2), 0px 21px 33px 3px rgba(58, 53, 65, 0.14), 0px 8px 40px 7px rgba(58, 53, 65, 0.12)',
            '0px 10px 14px -6px rgba(58, 53, 65, 0.2), 0px 22px 35px 3px rgba(58, 53, 65, 0.14), 0px 8px 42px 7px rgba(58, 53, 65, 0.12)',
            '0px 11px 14px -7px rgba(58, 53, 65, 0.2), 0px 23px 36px 3px rgba(58, 53, 65, 0.14), 0px 9px 44px 8px rgba(58, 53, 65, 0.12)',
            '0px 11px 15px -7px rgba(58, 53, 65, 0.2), 0px 24px 38px 3px rgba(58, 53, 65, 0.14), 0px 9px 46px 8px rgba(58, 53, 65, 0.12)'
        ];
    } else {
        return [
            'none',
            '0px 2px 1px -1px rgba(19, 17, 32, 0.2), 0px 1px 1px 0px rgba(19, 17, 32, 0.14), 0px 1px 3px 0px rgba(19, 17, 32, 0.12)',
            '0px 3px 1px -2px rgba(19, 17, 32, 0.2), 0px 2px 2px 0px rgba(19, 17, 32, 0.14), 0px 1px 5px 0px rgba(19, 17, 32, 0.12)',
            '0px 4px 8px -4px rgba(19, 17, 32, 0.42)',
            '0px 6px 18px -8px rgba(19, 17, 32, 0.56)',
            '0px 3px 5px -1px rgba(19, 17, 32, 0.2), 0px 5px 8px rgba(19, 17, 32, 0.14), 0px 1px 14px rgba(19, 17, 32, 0.12)',
            '0px 2px 10px 0px rgba(19, 17, 32, 0.1)',
            '0px 4px 5px -2px rgba(19, 17, 32, 0.2), 0px 7px 10px 1px rgba(19, 17, 32, 0.14), 0px 2px 16px 1px rgba(19, 17, 32, 0.12)',
            '0px 5px 5px -3px rgba(19, 17, 32, 0.2), 0px 8px 10px 1px rgba(19, 17, 32, 0.14), 0px 3px 14px 2px rgba(19, 17, 32, 0.12)',
            '0px 5px 6px -3px rgba(19, 17, 32, 0.2), 0px 9px 12px 1px rgba(19, 17, 32, 0.14), 0px 3px 16px 2px rgba(19, 17, 32, 0.12)',
            '0px 6px 6px -3px rgba(19, 17, 32, 0.2), 0px 10px 14px 1px rgba(19, 17, 32, 0.14), 0px 4px 18px 3px rgba(19, 17, 32, 0.12)',
            '0px 6px 7px -4px rgba(19, 17, 32, 0.2), 0px 11px 15px 1px rgba(19, 17, 32, 0.14), 0px 4px 20px 3px rgba(19, 17, 32, 0.12)',
            '0px 7px 8px -4px rgba(19, 17, 32, 0.2), 0px 12px 17px 2px rgba(19, 17, 32, 0.14), 0px 5px 22px 4px rgba(19, 17, 32, 0.12)',
            '0px 7px 8px -4px rgba(19, 17, 32, 0.2), 0px 13px 19px 2px rgba(19, 17, 32, 0.14), 0px 5px 24px 4px rgba(19, 17, 32, 0.12)',
            '0px 7px 9px -4px rgba(19, 17, 32, 0.2), 0px 14px 21px 2px rgba(19, 17, 32, 0.14), 0px 5px 26px 4px rgba(19, 17, 32, 0.12)',
            '0px 8px 9px -5px rgba(19, 17, 32, 0.2), 0px 15px 22px 2px rgba(19, 17, 32, 0.14), 0px 6px 28px 5px rgba(19, 17, 32, 0.12)',
            '0px 8px 10px -5px rgba(19, 17, 32, 0.2), 0px 16px 24px 2px rgba(19, 17, 32, 0.14), 0px 6px 30px 5px rgba(19, 17, 32, 0.12)',
            '0px 8px 11px -5px rgba(19, 17, 32, 0.2), 0px 17px 26px 2px rgba(19, 17, 32, 0.14), 0px 6px 32px 5px rgba(19, 17, 32, 0.12)',
            '0px 9px 11px -5px rgba(19, 17, 32, 0.2), 0px 18px 28px 2px rgba(19, 17, 32, 0.14), 0px 7px 34px 6px rgba(19, 17, 32, 0.12)',
            '0px 9px 12px -6px rgba(19, 17, 32, 0.2), 0px 19px 29px 2px rgba(19, 17, 32, 0.14), 0px 7px 36px 6px rgba(19, 17, 32, 0.12)',
            '0px 10px 13px -6px rgba(19, 17, 32, 0.2), 0px 20px 31px 3px rgba(19, 17, 32, 0.14), 0px 8px 38px 7px rgba(19, 17, 32, 0.12)',
            '0px 10px 13px -6px rgba(19, 17, 32, 0.2), 0px 21px 33px 3px rgba(19, 17, 32, 0.14), 0px 8px 40px 7px rgba(19, 17, 32, 0.12)',
            '0px 10px 14px -6px rgba(19, 17, 32, 0.2), 0px 22px 35px 3px rgba(19, 17, 32, 0.14), 0px 8px 42px 7px rgba(19, 17, 32, 0.12)',
            '0px 11px 14px -7px rgba(19, 17, 32, 0.2), 0px 23px 36px 3px rgba(19, 17, 32, 0.14), 0px 9px 44px 8px rgba(19, 17, 32, 0.12)',
            '0px 11px 15px -7px rgba(19, 17, 32, 0.2), 0px 24px 38px 3px rgba(19, 17, 32, 0.14), 0px 9px 46px 8px rgba(19, 17, 32, 0.12)'
        ];
    }
};
/* harmony default export */ const shadows = (Shadows);

;// CONCATENATED MODULE: ./src/@core/theme/breakpoints/index.ts
const breakpoints = ()=>({
        values: {
            xs: 0,
            sm: 600,
            md: 900,
            lg: 1200,
            xl: 1536
        }
    })
;
/* harmony default export */ const theme_breakpoints = (breakpoints);

;// CONCATENATED MODULE: ./src/@core/theme/ThemeOptions.ts
// ** MUI Theme Provider

// ** Theme Override Imports




const themeOptions = (settings)=>{
    // ** Vars
    const { mode , themeColor  } = settings;
    const themeConfig = {
        palette: palette(mode, themeColor),
        typography: {
            fontFamily: [
                'Inter',
                'sans-serif',
                '-apple-system',
                'BlinkMacSystemFont',
                '"Segoe UI"',
                'Roboto',
                '"Helvetica Neue"',
                'Arial',
                'sans-serif',
                '"Apple Color Emoji"',
                '"Segoe UI Emoji"',
                '"Segoe UI Symbol"'
            ].join(',')
        },
        shadows: shadows(mode),
        ...spacing,
        breakpoints: theme_breakpoints(),
        shape: {
            borderRadius: 6
        },
        mixins: {
            toolbar: {
                minHeight: 64
            }
        }
    };
    return (0,utils_namespaceObject.deepmerge)(themeConfig, {
        palette: {
            primary: {
                ...themeConfig.palette[themeColor]
            }
        }
    });
};
/* harmony default export */ const ThemeOptions = (themeOptions);

;// CONCATENATED MODULE: ./src/@core/theme/globalStyles.ts
const GlobalStyles = (theme)=>{
    return {
        '.ps__rail-y': {
            zIndex: 1,
            right: '0 !important',
            left: 'auto !important',
            '&:hover, &:focus, &.ps--clicking': {
                backgroundColor: theme.palette.mode === 'light' ? '#E4E5EB !important' : '#423D5D !important'
            },
            '& .ps__thumb-y': {
                right: '3px !important',
                left: 'auto !important',
                backgroundColor: theme.palette.mode === 'light' ? '#C2C4D1 !important' : '#504B6D !important'
            },
            '.layout-vertical-nav &': {
                '& .ps__thumb-y': {
                    width: 4,
                    backgroundColor: theme.palette.mode === 'light' ? '#C2C4D1 !important' : '#504B6D !important'
                },
                '&:hover, &:focus, &.ps--clicking': {
                    backgroundColor: 'transparent !important',
                    '& .ps__thumb-y': {
                        width: 6
                    }
                }
            }
        },
        '#nprogress': {
            pointerEvents: 'none',
            '& .bar': {
                left: 0,
                top: 0,
                height: 3,
                width: '100%',
                zIndex: 2000,
                position: 'fixed',
                backgroundColor: theme.palette.primary.main
            }
        }
    };
};
/* harmony default export */ const globalStyles = (GlobalStyles);

;// CONCATENATED MODULE: ./src/@core/theme/ThemeComponent.tsx

// ** MUI Imports



// ** Theme Config

// ** Theme Override Imports


// ** Theme


const ThemeComponent = (props)=>{
    // ** Props
    const { settings , children  } = props;
    // ** Merged ThemeOptions of Core and User
    const coreThemeConfig = ThemeOptions(settings);
    // ** Pass ThemeOptions to CreateTheme Function to create partial theme without component overrides
    let theme = (0,styles_.createTheme)(coreThemeConfig);
    // ** Continue theme creation and pass merged component overrides to CreateTheme function
    theme = (0,styles_.createTheme)(theme, {
        components: {
            ...overrides(theme)
        },
        typography: {
            ...theme_typography(theme)
        }
    });
    // ** Set responsive font sizes to true
    if (themeConfig/* default.responsiveFontSizes */.Z.responsiveFontSizes) {
        theme = (0,styles_.responsiveFontSizes)(theme);
    }
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(styles_.ThemeProvider, {
        theme: theme,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((CssBaseline_default()), {
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((GlobalStyles_default()), {
                styles: ()=>globalStyles(theme)
            }),
            children
        ]
    }));
};
/* harmony default export */ const theme_ThemeComponent = (ThemeComponent);

// EXTERNAL MODULE: external "@mui/material/useMediaQuery"
var useMediaQuery_ = __webpack_require__(9868);
var useMediaQuery_default = /*#__PURE__*/__webpack_require__.n(useMediaQuery_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: external "@mui/material/Fab"
const Fab_namespaceObject = require("@mui/material/Fab");
var Fab_default = /*#__PURE__*/__webpack_require__.n(Fab_namespaceObject);
// EXTERNAL MODULE: external "@mui/material/Box"
var Box_ = __webpack_require__(19);
var Box_default = /*#__PURE__*/__webpack_require__.n(Box_);
;// CONCATENATED MODULE: external "mdi-material-ui/ArrowUp"
const ArrowUp_namespaceObject = require("mdi-material-ui/ArrowUp");
var ArrowUp_default = /*#__PURE__*/__webpack_require__.n(ArrowUp_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/AppBar"
const AppBar_namespaceObject = require("@mui/material/AppBar");
var AppBar_default = /*#__PURE__*/__webpack_require__.n(AppBar_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/Toolbar"
const Toolbar_namespaceObject = require("@mui/material/Toolbar");
var Toolbar_default = /*#__PURE__*/__webpack_require__.n(Toolbar_namespaceObject);
;// CONCATENATED MODULE: ./src/@core/layouts/components/vertical/appBar/index.tsx

// ** MUI Imports



const AppBar = (0,styles_.styled)((AppBar_default()))(({ theme  })=>({
        transition: 'none',
        alignItems: 'center',
        justifyContent: 'center',
        padding: theme.spacing(0, 6),
        backgroundColor: 'transparent',
        color: theme.palette.text.primary,
        minHeight: theme.mixins.toolbar.minHeight,
        [theme.breakpoints.down('sm')]: {
            paddingLeft: theme.spacing(4),
            paddingRight: theme.spacing(4)
        }
    })
);
const Toolbar = (0,styles_.styled)((Toolbar_default()))(({ theme  })=>({
        width: '100%',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        padding: `${theme.spacing(0)} !important`,
        minHeight: `${theme.mixins.toolbar.minHeight}px !important`,
        transition: 'padding .25s ease-in-out, box-shadow .25s ease-in-out, backdrop-filter .25s ease-in-out, background-color .25s ease-in-out'
    })
);
const LayoutAppBar = (props)=>{
    // ** Props
    const { settings , verticalAppBarContent: userVerticalAppBarContent  } = props;
    // ** Hooks
    const theme = (0,styles_.useTheme)();
    // ** Vars
    const { contentWidth  } = settings;
    return(/*#__PURE__*/ jsx_runtime_.jsx(AppBar, {
        elevation: 0,
        color: "default",
        className: "layout-navbar",
        position: "static",
        children: /*#__PURE__*/ jsx_runtime_.jsx(Toolbar, {
            className: "navbar-content-container",
            sx: {
                ...contentWidth === 'boxed' && {
                    '@media (min-width:1440px)': {
                        maxWidth: `calc(1440px - ${theme.spacing(6)} * 2)`
                    }
                }
            },
            children: userVerticalAppBarContent && userVerticalAppBarContent(props) || null
        })
    }));
};
/* harmony default export */ const appBar = (LayoutAppBar);

;// CONCATENATED MODULE: external "@mui/material/List"
const List_namespaceObject = require("@mui/material/List");
var List_default = /*#__PURE__*/__webpack_require__.n(List_namespaceObject);
;// CONCATENATED MODULE: external "react-perfect-scrollbar"
const external_react_perfect_scrollbar_namespaceObject = require("react-perfect-scrollbar");
var external_react_perfect_scrollbar_default = /*#__PURE__*/__webpack_require__.n(external_react_perfect_scrollbar_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/SwipeableDrawer"
const SwipeableDrawer_namespaceObject = require("@mui/material/SwipeableDrawer");
var SwipeableDrawer_default = /*#__PURE__*/__webpack_require__.n(SwipeableDrawer_namespaceObject);
;// CONCATENATED MODULE: ./src/@core/layouts/components/vertical/navigation/Drawer.tsx

// ** MUI Imports


const SwipeableDrawer = (0,styles_.styled)((SwipeableDrawer_default()))({
    overflowX: 'hidden',
    transition: 'width .25s ease-in-out',
    '& ul': {
        listStyle: 'none'
    },
    '& .MuiListItem-gutters': {
        paddingLeft: 4,
        paddingRight: 4
    },
    '& .MuiDrawer-paper': {
        left: 'unset',
        right: 'unset',
        overflowX: 'hidden',
        transition: 'width .25s ease-in-out, box-shadow .25s ease-in-out'
    }
});
const Drawer = (props)=>{
    // ** Props
    const { hidden , children , navWidth , navVisible , setNavVisible  } = props;
    // ** Hook
    const theme = (0,styles_.useTheme)();
    // Drawer Props for Mobile & Tablet screens
    const MobileDrawerProps = {
        open: navVisible,
        onOpen: ()=>setNavVisible(true)
        ,
        onClose: ()=>setNavVisible(false)
        ,
        ModalProps: {
            keepMounted: true // Better open performance on mobile.
        }
    };
    // Drawer Props for Desktop screens
    const DesktopDrawerProps = {
        open: true,
        onOpen: ()=>null
        ,
        onClose: ()=>null
    };
    return(/*#__PURE__*/ jsx_runtime_.jsx(SwipeableDrawer, {
        className: "layout-vertical-nav",
        variant: hidden ? 'temporary' : 'permanent',
        ...hidden ? {
            ...MobileDrawerProps
        } : {
            ...DesktopDrawerProps
        },
        PaperProps: {
            sx: {
                width: navWidth
            }
        },
        sx: {
            width: navWidth,
            '& .MuiDrawer-paper': {
                borderRight: 0,
                backgroundColor: theme.palette.background.default
            }
        },
        children: children
    }));
};
/* harmony default export */ const navigation_Drawer = (Drawer);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "@mui/material/Chip"
var Chip_ = __webpack_require__(8369);
var Chip_default = /*#__PURE__*/__webpack_require__.n(Chip_);
;// CONCATENATED MODULE: external "@mui/material/ListItem"
const ListItem_namespaceObject = require("@mui/material/ListItem");
var ListItem_default = /*#__PURE__*/__webpack_require__.n(ListItem_namespaceObject);
// EXTERNAL MODULE: external "@mui/material/Typography"
var Typography_ = __webpack_require__(7163);
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography_);
;// CONCATENATED MODULE: external "@mui/material/ListItemIcon"
const ListItemIcon_namespaceObject = require("@mui/material/ListItemIcon");
var ListItemIcon_default = /*#__PURE__*/__webpack_require__.n(ListItemIcon_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/ListItemButton"
const ListItemButton_namespaceObject = require("@mui/material/ListItemButton");
var ListItemButton_default = /*#__PURE__*/__webpack_require__.n(ListItemButton_namespaceObject);
;// CONCATENATED MODULE: ./src/layouts/components/UserIcon.tsx

const UserIcon = (props)=>{
    // ** Props
    const { icon , iconProps  } = props;
    const IconTag = icon;
    let styles;
    /* styles = {
    color: 'red',
    fontSize: '2rem'
  } */ // @ts-ignore
    return(/*#__PURE__*/ jsx_runtime_.jsx(IconTag, {
        ...iconProps,
        style: {
            ...styles
        }
    }));
};
/* harmony default export */ const components_UserIcon = (UserIcon);

;// CONCATENATED MODULE: ./src/@core/layouts/utils.ts
/**
 * Check for URL queries as well for matching
 * Current URL & Item Path
 *
 * @param item
 * @param activeItem
 */ const handleURLQueries = (router, path)=>{
    if (Object.keys(router.query).length && path) {
        const arr = Object.keys(router.query);
        return router.asPath.includes(path) && router.asPath.includes(router.query[arr[0]]) && path !== '/';
    }
    return false;
};

;// CONCATENATED MODULE: ./src/@core/layouts/components/vertical/navigation/VerticalNavLink.tsx

// ** Next Imports


// ** MUI Imports







// ** Configs Import

// ** Custom Components Imports

// ** Utils

// ** Styled Components
const MenuNavLink = (0,styles_.styled)((ListItemButton_default()))(({ theme  })=>({
        width: '100%',
        borderTopRightRadius: 100,
        borderBottomRightRadius: 100,
        color: theme.palette.text.primary,
        padding: theme.spacing(2.25, 3.5),
        transition: 'opacity .25s ease-in-out',
        '&.active, &.active:hover': {
            boxShadow: theme.shadows[3],
            backgroundImage: `linear-gradient(98deg, ${theme.palette.customColors.primaryGradient}, ${theme.palette.primary.main} 94%)`
        },
        '&.active .MuiTypography-root, &.active .MuiSvgIcon-root': {
            color: `${theme.palette.common.white} !important`
        }
    })
);
const MenuItemTextMetaWrapper = (0,styles_.styled)((Box_default()))({
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    transition: 'opacity .25s ease-in-out',
    ...themeConfig/* default.menuTextTruncate */.Z.menuTextTruncate && {
        overflow: 'hidden'
    }
});
const VerticalNavLink = ({ item , navVisible , toggleNavVisibility  })=>{
    // ** Hooks
    const router = (0,router_.useRouter)();
    const IconTag = item.icon;
    const isNavLinkActive = ()=>{
        if (router.pathname === item.path || handleURLQueries(router, item.path)) {
            return true;
        } else {
            return false;
        }
    };
    return(/*#__PURE__*/ jsx_runtime_.jsx((ListItem_default()), {
        disablePadding: true,
        className: "nav-link",
        disabled: item.disabled || false,
        sx: {
            mt: 1.5,
            px: '0 !important'
        },
        children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
            passHref: true,
            href: item.path === undefined ? '/' : `${item.path}`,
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(MenuNavLink, {
                component: 'a',
                className: isNavLinkActive() ? 'active' : '',
                ...item.openInNewTab ? {
                    target: '_blank'
                } : null,
                onClick: (e)=>{
                    if (item.path === undefined) {
                        e.preventDefault();
                        e.stopPropagation();
                    }
                    if (navVisible) {
                        toggleNavVisibility();
                    }
                },
                sx: {
                    pl: 5.5,
                    ...item.disabled ? {
                        pointerEvents: 'none'
                    } : {
                        cursor: 'pointer'
                    }
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((ListItemIcon_default()), {
                        sx: {
                            mr: 2.5,
                            color: 'text.primary',
                            transition: 'margin .25s ease-in-out'
                        },
                        children: /*#__PURE__*/ jsx_runtime_.jsx(components_UserIcon, {
                            icon: IconTag
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(MenuItemTextMetaWrapper, {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                ...themeConfig/* default.menuTextTruncate */.Z.menuTextTruncate && {
                                    noWrap: true
                                },
                                children: item.title
                            }),
                            item.badgeContent ? /*#__PURE__*/ jsx_runtime_.jsx((Chip_default()), {
                                label: item.badgeContent,
                                color: item.badgeColor || 'primary',
                                sx: {
                                    height: 20,
                                    fontWeight: 500,
                                    marginLeft: 1.25,
                                    '& .MuiChip-label': {
                                        px: 1.5,
                                        textTransform: 'capitalize'
                                    }
                                }
                            }) : null
                        ]
                    })
                ]
            })
        })
    }));
};
/* harmony default export */ const navigation_VerticalNavLink = (VerticalNavLink);

// EXTERNAL MODULE: external "@mui/material/Divider"
var Divider_ = __webpack_require__(3646);
var Divider_default = /*#__PURE__*/__webpack_require__.n(Divider_);
;// CONCATENATED MODULE: external "@mui/material/ListSubheader"
const ListSubheader_namespaceObject = require("@mui/material/ListSubheader");
var ListSubheader_default = /*#__PURE__*/__webpack_require__.n(ListSubheader_namespaceObject);
;// CONCATENATED MODULE: ./src/@core/layouts/components/vertical/navigation/VerticalNavSectionTitle.tsx

// ** MUI Imports




// ** Styled Components
const ListSubheader = (0,styles_.styled)((props)=>/*#__PURE__*/ jsx_runtime_.jsx((ListSubheader_default()), {
        component: "li",
        ...props
    })
)(({ theme  })=>({
        lineHeight: 1,
        display: 'flex',
        position: 'relative',
        marginTop: theme.spacing(7),
        marginBottom: theme.spacing(2),
        backgroundColor: 'transparent',
        transition: 'padding-left .25s ease-in-out'
    })
);
const TypographyHeaderText = (0,styles_.styled)((Typography_default()))(({ theme  })=>({
        fontSize: '0.75rem',
        lineHeight: 'normal',
        letterSpacing: '0.21px',
        textTransform: 'uppercase',
        color: theme.palette.text.disabled,
        fontWeight: theme.typography.fontWeightMedium
    })
);
const VerticalNavSectionTitle = (props)=>{
    // ** Props
    const { item  } = props;
    // ** Hook
    const theme = (0,styles_.useTheme)();
    return(/*#__PURE__*/ jsx_runtime_.jsx(ListSubheader, {
        className: "nav-section-title",
        sx: {
            px: 0,
            py: 1.75,
            color: theme.palette.text.disabled,
            '& .MuiDivider-root:before, & .MuiDivider-root:after, & hr': {
                borderColor: `rgba(${theme.palette.customColors.main}, 0.12)`
            }
        },
        children: /*#__PURE__*/ jsx_runtime_.jsx((Divider_default()), {
            textAlign: "left",
            sx: {
                m: 0,
                width: '100%',
                lineHeight: 'normal',
                textTransform: 'uppercase',
                '&:before, &:after': {
                    top: 7,
                    transform: 'none'
                },
                '& .MuiDivider-wrapper': {
                    px: 2.5,
                    fontSize: '0.75rem',
                    letterSpacing: '0.21px'
                }
            },
            children: /*#__PURE__*/ jsx_runtime_.jsx(TypographyHeaderText, {
                noWrap: true,
                children: item.sectionTitle
            })
        })
    }));
};
/* harmony default export */ const navigation_VerticalNavSectionTitle = (VerticalNavSectionTitle);

;// CONCATENATED MODULE: ./src/@core/layouts/components/vertical/navigation/VerticalNavItems.tsx


// ** Custom Menu Components


const resolveNavItemComponent = (item)=>{
    if (item.sectionTitle) return navigation_VerticalNavSectionTitle;
    return navigation_VerticalNavLink;
};
const VerticalNavItems = (props)=>{
    // ** Props
    const { verticalNavItems  } = props;
    const RenderMenuItems = verticalNavItems === null || verticalNavItems === void 0 ? void 0 : verticalNavItems.map((item, index)=>{
        const TagName = resolveNavItemComponent(item);
        return(/*#__PURE__*/ (0,external_react_.createElement)(TagName, {
            ...props,
            key: index,
            item: item
        }));
    });
    return(/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: RenderMenuItems
    }));
};
/* harmony default export */ const navigation_VerticalNavItems = (VerticalNavItems);

;// CONCATENATED MODULE: ./src/@core/layouts/components/vertical/navigation/VerticalNavHeader.tsx

// ** Next Import

// ** MUI Imports



// ** Configs

// ** Styled Components
const MenuHeaderWrapper = (0,styles_.styled)((Box_default()))(({ theme  })=>({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingRight: theme.spacing(4.5),
        transition: 'padding .25s ease-in-out',
        minHeight: theme.mixins.toolbar.minHeight
    })
);
const HeaderTitle = (0,styles_.styled)((Typography_default()))(({ theme  })=>({
        fontWeight: 600,
        lineHeight: 'normal',
        textTransform: 'uppercase',
        color: theme.palette.text.primary,
        transition: 'opacity .25s ease-in-out, margin .25s ease-in-out'
    })
);
const StyledLink = (0,styles_.styled)('a')({
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none'
});
const VerticalNavHeader = (props)=>{
    // ** Props
    const { verticalNavMenuBranding: userVerticalNavMenuBranding  } = props;
    // ** Hooks
    // const theme = useTheme()
    return(/*#__PURE__*/ jsx_runtime_.jsx(MenuHeaderWrapper, {
        className: "nav-header",
        sx: {
            pl: 6
        },
        children: userVerticalNavMenuBranding ? userVerticalNavMenuBranding(props) : /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
            href: "/",
            passHref: true,
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(StyledLink, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: 32,
                        height: 32,
                        style: {
                            shapeRendering: 'geometricPrecision',
                            textRendering: 'geometricPrecision',
                            // imageRendering: 'optimizeQuality',
                            fillRule: 'evenodd',
                            clipRule: 'evenodd'
                        },
                        ...props,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                fill: "#2e313c",
                                d: "M9.5 3.5c1.602 1.574 3.602 2.24 6 2v1c-2.545.927-4.878.927-7 0 .372 2.883.372 5.883 0 9l-2-7c-.227-2.433.773-4.1 3-5Z",
                                style: {
                                    opacity: 1
                                }
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                fill: "#5a6a58",
                                d: "M15.5 5.5h1c.848 1.125 1.848 1.125 3 0 .948 1.478 2.28 2.478 4 3-1.333 1-1.333 2 0 3h-2c.039-1.256-.461-2.256-1.5-3-1.414.913-2.914.913-4.5 0v-3Z",
                                style: {
                                    opacity: 1
                                }
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                fill: "#e7dec6",
                                d: "M15.5 6.5v2c1.586.913 3.086.913 4.5 0 1.039.744 1.539 1.744 1.5 3 .927 1.976 2.26 2.31 4 1-.457-.797-1.124-1.13-2-1-1.333-1-1.333-2 0-3h3c.667 0 1 .333 1 1 1.76 3.721.76 6.388-3 8-.343-1.725-1.343-2.225-3-1.5.752.67 1.086 1.504 1 2.5-4.01-1.763-7.677-1.263-11 1.5h4l-4 3c2.178.165 4.011-.668 5.5-2.5 1.016 1.134 1.683.8 2-1a20.473 20.473 0 0 1 3.5 2.5c-1.384 1.65-3.051 2.816-5 3.5h-4c-1.562-.233-2.895-.9-4-2v-5c2.05-.822 1.716-1.822-1-3 .372-3.117.372-6.117 0-9 2.122.927 4.455.927 7 0Z",
                                style: {
                                    opacity: 1
                                }
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                fill: "#2d2926",
                                d: "M15.5 8.5c-.603 1.135-.936 2.135-1 3-.992.172-1.658-.162-2-1 1.238-.31 1.238-.81 0-1.5a4.932 4.932 0 0 1 3-.5Z",
                                style: {
                                    opacity: 1
                                }
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                fill: "#0f0f11",
                                d: "M17.5-.5h4c.361 3.722 2.028 6.722 5 9h-3c-1.72-.522-3.052-1.522-4-3v-1c1.282-1.208 1.282-2.542 0-4-.797.457-1.13 1.124-1 2-.901.79-1.568 1.79-2 3h-1c-1.033-3.1-3.033-3.766-6-2-2.227.9-3.227 2.567-3 5a36.03 36.03 0 0 0-3 8c.457.797 1.124 1.13 2 1 1.068.934 2.401 1.268 4 1v5c-1.174 1.014-1.84 2.347-2 4-.997.03-1.664-.47-2-1.5a34.845 34.845 0 0 0 3-6 20.627 20.627 0 0 1-6-2c-1.017-1.05-1.184-2.216-.5-3.5a32.776 32.776 0 0 0 4-10c2.823-3.071 6.156-3.738 10-2 1.039-.744 1.539-1.744 1.5-3Z",
                                style: {
                                    opacity: 0.741
                                }
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                fill: "#e3d77a",
                                d: "M18.5 2.5c.838.342 1.172 1.008 1 2v1c-1.152 1.125-2.152 1.125-3 0 .432-1.21 1.099-2.21 2-3Z",
                                style: {
                                    opacity: 1
                                }
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                fill: "#6a80c0",
                                d: "M15.5 5.5c-2.398.24-4.398-.426-6-2 2.967-1.766 4.967-1.1 6 2Z",
                                style: {
                                    opacity: 1
                                }
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                fill: "#a57066",
                                d: "M19.5 4.5c.172-.992-.162-1.658-1-2-.13-.876.203-1.543 1-2 1.282 1.458 1.282 2.792 0 4Z",
                                style: {
                                    opacity: 1
                                }
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                fill: "#758dd3",
                                d: "m6.5 8.5 2 7c-.321 1.548-1.321 2.215-3 2-.876.13-1.543-.203-2-1a36.03 36.03 0 0 1 3-8Z",
                                style: {
                                    opacity: 1
                                }
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                fill: "#e9929c",
                                d: "M21.5 11.5h2c.876-.13 1.543.203 2 1-1.74 1.31-3.073.976-4-1Z",
                                style: {
                                    opacity: 1
                                }
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                fill: "#eba0a5",
                                d: "M12.5 10.5c.342.838 1.008 1.172 2 1-.683 1.677-2.017 2.343-4 2-.215-1.679.452-2.679 2-3Z",
                                style: {
                                    opacity: 1
                                }
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                fill: "#878376",
                                d: "M24.5 17.5c-.342.838-1.008 1.172-2 1 .086-.996-.248-1.83-1-2.5 1.657-.725 2.657-.225 3 1.5Z",
                                style: {
                                    opacity: 1
                                }
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                fill: "#404967",
                                d: "M8.5 15.5c2.716 1.178 3.05 2.178 1 3-1.599.268-2.932-.066-4-1 1.679.215 2.679-.452 3-2Z",
                                style: {
                                    opacity: 1
                                }
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                fill: "#161616",
                                d: "M27.5 9.5c3.653 5.664 1.986 9.164-5 10.5 1.282 2.79.448 4.957-2.5 6.5-.494 1.634-.66 3.3-.5 5h-4c-.084-5.14-.75-5.14-2 0h-3l-2-4c.876.13 1.543-.203 2-1a5.576 5.576 0 0 1-1-3c1.105 1.1 2.438 1.767 4 2v1c1.643-.02 2.976.647 4 2 1.062-.925 1.062-1.925 0-3 1.949-.684 3.616-1.85 5-3.5a20.473 20.473 0 0 0-3.5-2.5c-.317 1.8-.984 2.134-2 1-1.489 1.832-3.322 2.665-5.5 2.5l4-3h-4c3.323-2.763 6.99-3.263 11-1.5.992.172 1.658-.162 2-1 3.76-1.612 4.76-4.279 3-8Z",
                                style: {
                                    opacity: 0.82
                                }
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                fill: "#7189cd",
                                d: "M9.5 23.5a5.576 5.576 0 0 0 1 3c-.457.797-1.124 1.13-2 1h-1c.16-1.653.826-2.986 2-4Z",
                                style: {
                                    opacity: 1
                                }
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                fill: "#7e796a",
                                d: "M13.5 26.5v-1h4c1.062 1.075 1.062 2.075 0 3-1.024-1.353-2.357-2.02-4-2Z",
                                style: {
                                    opacity: 1
                                }
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                fill: "#9a9587",
                                d: "M13.5 26.5c-.14 1.837-.806 2.17-2 1 .457-.797 1.124-1.13 2-1Z",
                                style: {
                                    opacity: 1
                                }
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(HeaderTitle, {
                        variant: "h6",
                        sx: {
                            ml: 1
                        },
                        children: themeConfig/* default.templateName */.Z.templateName
                    })
                ]
            })
        })
    }));
};
/* harmony default export */ const navigation_VerticalNavHeader = (VerticalNavHeader);

;// CONCATENATED MODULE: ./src/@core/layouts/components/vertical/navigation/index.tsx

// ** React Import

// ** MUI Import



// ** Third Party Components

// ** Component Imports



// ** Util Import

const StyledBoxForShadow = (0,styles_.styled)((Box_default()))({
    top: 50,
    left: -8,
    zIndex: 2,
    height: 75,
    display: 'none',
    position: 'absolute',
    pointerEvents: 'none',
    width: 'calc(100% + 15px)',
    '&.d-block': {
        display: 'block'
    }
});
const Navigation = (props)=>{
    // ** Props
    const { hidden , afterVerticalNavMenuContent , beforeVerticalNavMenuContent , verticalNavMenuContent: userVerticalNavMenuContent  } = props;
    // ** States
    const { 0: groupActive , 1: setGroupActive  } = (0,external_react_.useState)([]);
    const { 0: currentActiveGroup , 1: setCurrentActiveGroup  } = (0,external_react_.useState)([]);
    // ** Ref
    const shadowRef = (0,external_react_.useRef)(null);
    // ** Hooks
    const theme = (0,styles_.useTheme)();
    // ** Fixes Navigation InfiniteScroll
    const handleInfiniteScroll = (ref)=>{
        if (ref) {
            // @ts-ignore
            ref._getBoundingClientRect = ref.getBoundingClientRect;
            ref.getBoundingClientRect = ()=>{
                // @ts-ignore
                const original = ref._getBoundingClientRect();
                return {
                    ...original,
                    height: Math.floor(original.height)
                };
            };
        }
    };
    // ** Scroll Menu
    const scrollMenu = (container)=>{
        container = hidden ? container.target : container;
        if (shadowRef && container.scrollTop > 0) {
            // @ts-ignore
            if (!shadowRef.current.classList.contains('d-block')) {
                // @ts-ignore
                shadowRef.current.classList.add('d-block');
            }
        } else {
            // @ts-ignore
            shadowRef.current.classList.remove('d-block');
        }
    };
    const ScrollWrapper = hidden ? (Box_default()) : (external_react_perfect_scrollbar_default());
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(navigation_Drawer, {
        ...props,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(navigation_VerticalNavHeader, {
                ...props
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(StyledBoxForShadow, {
                ref: shadowRef,
                sx: {
                    background: `linear-gradient(${theme.palette.background.default} 40%,${(0,hex_to_rgba/* hexToRGBA */.E)(theme.palette.background.default, 0.1)} 95%,${(0,hex_to_rgba/* hexToRGBA */.E)(theme.palette.background.default, 0.05)})`
                }
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                sx: {
                    height: '100%',
                    position: 'relative',
                    overflow: 'hidden'
                },
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ScrollWrapper, {
                    containerRef: (ref)=>handleInfiniteScroll(ref)
                    ,
                    ...hidden ? {
                        onScroll: (container)=>scrollMenu(container)
                        ,
                        sx: {
                            height: '100%',
                            overflowY: 'auto',
                            overflowX: 'hidden'
                        }
                    } : {
                        options: {
                            wheelPropagation: false
                        },
                        onScrollY: (container)=>scrollMenu(container)
                    },
                    children: [
                        beforeVerticalNavMenuContent ? beforeVerticalNavMenuContent(props) : null,
                        /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                            sx: {
                                height: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between'
                            },
                            children: userVerticalNavMenuContent ? userVerticalNavMenuContent(props) : /*#__PURE__*/ jsx_runtime_.jsx((List_default()), {
                                className: "nav-items",
                                sx: {
                                    transition: 'padding .25s ease',
                                    pr: 4.5
                                },
                                children: /*#__PURE__*/ jsx_runtime_.jsx(navigation_VerticalNavItems, {
                                    groupActive: groupActive,
                                    setGroupActive: setGroupActive,
                                    currentActiveGroup: currentActiveGroup,
                                    setCurrentActiveGroup: setCurrentActiveGroup,
                                    ...props
                                })
                            })
                        })
                    ]
                })
            }),
            afterVerticalNavMenuContent ? afterVerticalNavMenuContent(props) : null
        ]
    }));
};
/* harmony default export */ const navigation = (Navigation);

;// CONCATENATED MODULE: external "@mui/material/Zoom"
const Zoom_namespaceObject = require("@mui/material/Zoom");
var Zoom_default = /*#__PURE__*/__webpack_require__.n(Zoom_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/useScrollTrigger"
const useScrollTrigger_namespaceObject = require("@mui/material/useScrollTrigger");
var useScrollTrigger_default = /*#__PURE__*/__webpack_require__.n(useScrollTrigger_namespaceObject);
;// CONCATENATED MODULE: ./src/@core/components/scroll-to-top/index.tsx

// ** MUI Imports



const ScrollToTopStyled = (0,styles_.styled)('div')(({ theme  })=>({
        zIndex: 11,
        position: 'fixed',
        right: theme.spacing(6),
        bottom: theme.spacing(10)
    })
);
const ScrollToTop = (props)=>{
    // ** Props
    const { children , className  } = props;
    // ** init trigger
    const trigger = useScrollTrigger_default()({
        threshold: 400,
        disableHysteresis: true
    });
    const handleClick = ()=>{
        const anchor = document.querySelector('body');
        if (anchor) {
            anchor.scrollIntoView({
                behavior: 'smooth'
            });
        }
    };
    return(/*#__PURE__*/ jsx_runtime_.jsx((Zoom_default()), {
        in: trigger,
        children: /*#__PURE__*/ jsx_runtime_.jsx(ScrollToTopStyled, {
            className: className,
            onClick: handleClick,
            role: "presentation",
            children: children
        })
    }));
};
/* harmony default export */ const scroll_to_top = (ScrollToTop);

// EXTERNAL MODULE: ./src/@core/styles/libs/react-datepicker/index.ts
var react_datepicker = __webpack_require__(5463);
;// CONCATENATED MODULE: ./src/@core/layouts/VerticalLayout.tsx

// ** React Imports

// ** MUI Imports



// ** Icons Imports

// ** Theme Config Import

// ** Components



// ** Styled Component

const VerticalLayoutWrapper = (0,styles_.styled)('div')({
    height: '100%',
    display: 'flex'
});
const MainContentWrapper = (0,styles_.styled)((Box_default()))({
    flexGrow: 1,
    minWidth: 0,
    display: 'flex',
    minHeight: '100vh',
    flexDirection: 'column'
});
const ContentWrapper = (0,styles_.styled)('main')(({ theme  })=>({
        flexGrow: 1,
        width: '100%',
        padding: theme.spacing(6),
        transition: 'padding .25s ease-in-out',
        [theme.breakpoints.down('sm')]: {
            paddingLeft: theme.spacing(4),
            paddingRight: theme.spacing(4)
        }
    })
);
const VerticalLayout = (props)=>{
    // ** Props
    const { settings , children , scrollToTop  } = props;
    // ** Vars
    const { contentWidth  } = settings;
    const navWidth = themeConfig/* default.navigationSize */.Z.navigationSize;
    // ** States
    const { 0: navVisible , 1: setNavVisible  } = (0,external_react_.useState)(false);
    // ** Toggle Functions
    const toggleNavVisibility = ()=>setNavVisible(!navVisible)
    ;
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(VerticalLayoutWrapper, {
                className: "layout-wrapper",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(navigation, {
                        navWidth: navWidth,
                        navVisible: navVisible,
                        setNavVisible: setNavVisible,
                        toggleNavVisibility: toggleNavVisibility,
                        ...props
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(MainContentWrapper, {
                        className: "layout-content-wrapper",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(appBar, {
                                toggleNavVisibility: toggleNavVisibility,
                                ...props
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(ContentWrapper, {
                                className: "layout-page-content",
                                sx: {
                                    ...contentWidth === 'boxed' && {
                                        mx: 'auto',
                                        '@media (min-width:1440px)': {
                                            maxWidth: 1440
                                        },
                                        '@media (min-width:1200px)': {
                                            maxWidth: '100%'
                                        }
                                    }
                                },
                                children: children
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(react_datepicker/* default */.Z, {
                                sx: {
                                    zIndex: 11
                                },
                                children: /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                                    id: "react-datepicker-portal"
                                })
                            })
                        ]
                    })
                ]
            }),
            scrollToTop ? scrollToTop(props) : /*#__PURE__*/ jsx_runtime_.jsx(scroll_to_top, {
                className: "mui-fixed",
                children: /*#__PURE__*/ jsx_runtime_.jsx((Fab_default()), {
                    color: "primary",
                    size: "small",
                    "aria-label": "scroll back to top",
                    children: /*#__PURE__*/ jsx_runtime_.jsx((ArrowUp_default()), {
                    })
                })
            })
        ]
    }));
};
/* harmony default export */ const layouts_VerticalLayout = (VerticalLayout);

// EXTERNAL MODULE: external "mdi-material-ui/AccountCogOutline"
var AccountCogOutline_ = __webpack_require__(2542);
var AccountCogOutline_default = /*#__PURE__*/__webpack_require__.n(AccountCogOutline_);
;// CONCATENATED MODULE: external "mdi-material-ui/HomeOutline"
const HomeOutline_namespaceObject = require("mdi-material-ui/HomeOutline");
var HomeOutline_default = /*#__PURE__*/__webpack_require__.n(HomeOutline_namespaceObject);
;// CONCATENATED MODULE: ./src/navigation/vertical/index.ts
// ** Icon imports


const vertical_navigation = ()=>{
    return [
        {
            title: 'Dashboard',
            icon: (HomeOutline_default()),
            path: '/'
        },
        {
            title: 'Account Settings',
            icon: (AccountCogOutline_default()),
            path: '/account-settings'
        }
    ];
};
/* harmony default export */ const vertical = (vertical_navigation);

// EXTERNAL MODULE: external "@mui/material/IconButton"
var IconButton_ = __webpack_require__(7934);
var IconButton_default = /*#__PURE__*/__webpack_require__.n(IconButton_);
// EXTERNAL MODULE: external "@mui/material/InputAdornment"
var InputAdornment_ = __webpack_require__(3103);
var InputAdornment_default = /*#__PURE__*/__webpack_require__.n(InputAdornment_);
// EXTERNAL MODULE: external "@mui/material/TextField"
var TextField_ = __webpack_require__(6042);
var TextField_default = /*#__PURE__*/__webpack_require__.n(TextField_);
;// CONCATENATED MODULE: external "mdi-material-ui/Magnify"
const Magnify_namespaceObject = require("mdi-material-ui/Magnify");
var Magnify_default = /*#__PURE__*/__webpack_require__.n(Magnify_namespaceObject);
;// CONCATENATED MODULE: external "mdi-material-ui/Menu"
const Menu_namespaceObject = require("mdi-material-ui/Menu");
var Menu_default = /*#__PURE__*/__webpack_require__.n(Menu_namespaceObject);
;// CONCATENATED MODULE: external "mdi-material-ui/WeatherNight"
const WeatherNight_namespaceObject = require("mdi-material-ui/WeatherNight");
var WeatherNight_default = /*#__PURE__*/__webpack_require__.n(WeatherNight_namespaceObject);
;// CONCATENATED MODULE: external "mdi-material-ui/WeatherSunny"
const WeatherSunny_namespaceObject = require("mdi-material-ui/WeatherSunny");
var WeatherSunny_default = /*#__PURE__*/__webpack_require__.n(WeatherSunny_namespaceObject);
;// CONCATENATED MODULE: ./src/@core/layouts/components/shared-components/ModeToggler.tsx


// ** Icons Imports


const ModeToggler = (props)=>{
    // ** Props
    const { settings , saveSettings  } = props;
    const handleModeChange = (mode)=>{
        saveSettings({
            ...settings,
            mode
        });
    };
    const handleModeToggle = ()=>{
        if (settings.mode === 'light') {
            handleModeChange('dark');
        } else {
            handleModeChange('light');
        }
    };
    return(/*#__PURE__*/ jsx_runtime_.jsx((IconButton_default()), {
        color: "inherit",
        "aria-haspopup": "true",
        onClick: handleModeToggle,
        children: settings.mode === 'dark' ? /*#__PURE__*/ jsx_runtime_.jsx((WeatherSunny_default()), {
        }) : /*#__PURE__*/ jsx_runtime_.jsx((WeatherNight_default()), {
        })
    }));
};
/* harmony default export */ const shared_components_ModeToggler = (ModeToggler);

// EXTERNAL MODULE: external "@mui/material/Avatar"
var Avatar_ = __webpack_require__(2120);
var Avatar_default = /*#__PURE__*/__webpack_require__.n(Avatar_);
;// CONCATENATED MODULE: external "@mui/material/Badge"
const Badge_namespaceObject = require("@mui/material/Badge");
var Badge_default = /*#__PURE__*/__webpack_require__.n(Badge_namespaceObject);
// EXTERNAL MODULE: external "@mui/material/Menu"
var Menu_ = __webpack_require__(8125);
var material_Menu_default = /*#__PURE__*/__webpack_require__.n(Menu_);
// EXTERNAL MODULE: external "@mui/material/MenuItem"
var MenuItem_ = __webpack_require__(9271);
var MenuItem_default = /*#__PURE__*/__webpack_require__.n(MenuItem_);
// EXTERNAL MODULE: external "mdi-material-ui/AccountOutline"
var AccountOutline_ = __webpack_require__(7143);
var AccountOutline_default = /*#__PURE__*/__webpack_require__.n(AccountOutline_);
;// CONCATENATED MODULE: external "mdi-material-ui/LogoutVariant"
const LogoutVariant_namespaceObject = require("mdi-material-ui/LogoutVariant");
var LogoutVariant_default = /*#__PURE__*/__webpack_require__.n(LogoutVariant_namespaceObject);
// EXTERNAL MODULE: external "js-cookie"
var external_js_cookie_ = __webpack_require__(6734);
var external_js_cookie_default = /*#__PURE__*/__webpack_require__.n(external_js_cookie_);
// EXTERNAL MODULE: ./src/services/list-day.service.ts
var list_day_service = __webpack_require__(1087);
;// CONCATENATED MODULE: ./src/@core/layouts/components/shared-components/UserDropdown.tsx

// ** React Imports

// ** Next Import

// ** MUI Imports








// ** Icons Imports




// ** Styled Components
const BadgeContentSpan = (0,styles_.styled)('span')(({ theme  })=>({
        width: 8,
        height: 8,
        borderRadius: '50%',
        backgroundColor: theme.palette.success.main,
        boxShadow: `0 0 0 2px ${theme.palette.background.paper}`
    })
);
const UserDropdown = ()=>{
    const userId = external_js_cookie_default().get('userId');
    // ** States
    const { 0: anchorEl , 1: setAnchorEl  } = (0,external_react_.useState)(null);
    const { 0: userInfo , 1: setUserInfo  } = (0,external_react_.useState)();
    // ** Hooks
    const router = (0,router_.useRouter)();
    const handleDropdownOpen = (event)=>{
        setAnchorEl(event.currentTarget);
    };
    const handleDropdownClose = (url)=>{
        if (url) {
            router.push(url);
        }
        setAnchorEl(null);
    };
    (0,external_react_.useEffect)(()=>{
        getUser();
    }, []);
    const getUser = async ()=>{
        const user = await list_day_service/* default.getListFromUser */.Z.getListFromUser(userId);
        setUserInfo(user);
    };
    console.log(userInfo);
    const styles = {
        py: 2,
        px: 4,
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        color: 'text.primary',
        textDecoration: 'none',
        '& svg': {
            fontSize: '1.375rem',
            color: 'text.secondary'
        }
    };
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((Badge_default()), {
                overlap: "circular",
                onClick: handleDropdownOpen,
                sx: {
                    ml: 2,
                    cursor: 'pointer'
                },
                badgeContent: /*#__PURE__*/ jsx_runtime_.jsx(BadgeContentSpan, {
                }),
                anchorOrigin: {
                    vertical: 'bottom',
                    horizontal: 'right'
                },
                children: /*#__PURE__*/ jsx_runtime_.jsx((Avatar_default()), {
                    onClick: handleDropdownOpen,
                    sx: {
                        width: 40,
                        height: 40
                    },
                    src: userInfo === null || userInfo === void 0 ? void 0 : userInfo.avatar
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((material_Menu_default()), {
                anchorEl: anchorEl,
                open: Boolean(anchorEl),
                onClose: ()=>handleDropdownClose()
                ,
                sx: {
                    '& .MuiMenu-paper': {
                        width: 230,
                        marginTop: 4
                    }
                },
                anchorOrigin: {
                    vertical: 'bottom',
                    horizontal: 'right'
                },
                transformOrigin: {
                    vertical: 'top',
                    horizontal: 'right'
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                        sx: {
                            pt: 2,
                            pb: 3,
                            px: 4
                        },
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                            sx: {
                                display: 'flex',
                                alignItems: 'center'
                            },
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((Badge_default()), {
                                    overlap: "circular",
                                    badgeContent: /*#__PURE__*/ jsx_runtime_.jsx(BadgeContentSpan, {
                                    }),
                                    anchorOrigin: {
                                        vertical: 'bottom',
                                        horizontal: 'right'
                                    },
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((Avatar_default()), {
                                        alt: "",
                                        src: userInfo === null || userInfo === void 0 ? void 0 : userInfo.avatar,
                                        sx: {
                                            width: '2.5rem',
                                            height: '2.5rem'
                                        }
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                                    sx: {
                                        display: 'flex',
                                        marginLeft: 3,
                                        alignItems: 'flex-start',
                                        flexDirection: 'column'
                                    },
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                            sx: {
                                                fontWeight: 600
                                            },
                                            children: userInfo === null || userInfo === void 0 ? void 0 : userInfo.username
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                            variant: "body2",
                                            sx: {
                                                fontSize: '0.8rem',
                                                color: 'text.disabled'
                                            },
                                            children: "''"
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((Divider_default()), {
                        sx: {
                            mt: 0,
                            mb: 1
                        }
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                        sx: {
                            p: 0
                        },
                        onClick: ()=>handleDropdownClose()
                        ,
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                            sx: styles,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((AccountOutline_default()), {
                                    sx: {
                                        marginRight: 2
                                    }
                                }),
                                "Profile"
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((Divider_default()), {
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((MenuItem_default()), {
                        sx: {
                            py: 2
                        },
                        onClick: ()=>handleDropdownClose('/auth/login')
                        ,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((LogoutVariant_default()), {
                                sx: {
                                    marginRight: 2,
                                    fontSize: '1.375rem',
                                    color: 'text.secondary'
                                },
                                onClick: ()=>external_js_cookie_default().remove('access_token')
                            }),
                            "Logout"
                        ]
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const shared_components_UserDropdown = (UserDropdown);

;// CONCATENATED MODULE: ./src/layouts/components/vertical/AppBarContent.tsx

// ** MUI Imports





// ** Icons Imports


// ** Components


const AppBarContent = (props)=>{
    // ** Props
    const { hidden , settings , saveSettings , toggleNavVisibility  } = props;
    // ** Hook
    const hiddenSm = useMediaQuery_default()((theme)=>theme.breakpoints.down('sm')
    );
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
        sx: {
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
        },
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                className: "actions-left",
                sx: {
                    mr: 2,
                    display: 'flex',
                    alignItems: 'center'
                },
                children: [
                    hidden ? /*#__PURE__*/ jsx_runtime_.jsx((IconButton_default()), {
                        color: "inherit",
                        onClick: toggleNavVisibility,
                        sx: {
                            ml: -2.75,
                            ...hiddenSm ? {
                            } : {
                                mr: 3.5
                            }
                        },
                        children: /*#__PURE__*/ jsx_runtime_.jsx((Menu_default()), {
                        })
                    }) : null,
                    /*#__PURE__*/ jsx_runtime_.jsx((TextField_default()), {
                        size: "small",
                        sx: {
                            '& .MuiOutlinedInput-root': {
                                borderRadius: 4
                            }
                        },
                        InputProps: {
                            startAdornment: /*#__PURE__*/ jsx_runtime_.jsx((InputAdornment_default()), {
                                position: "start",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((Magnify_default()), {
                                    fontSize: "small"
                                })
                            })
                        }
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                className: "actions-right",
                sx: {
                    display: 'flex',
                    alignItems: 'center'
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(shared_components_ModeToggler, {
                        settings: settings,
                        saveSettings: saveSettings
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(shared_components_UserDropdown, {
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const vertical_AppBarContent = (AppBarContent);

;// CONCATENATED MODULE: external "react-redux"
const external_react_redux_namespaceObject = require("react-redux");
;// CONCATENATED MODULE: external "@reduxjs/toolkit"
const toolkit_namespaceObject = require("@reduxjs/toolkit");
;// CONCATENATED MODULE: ./src/redux/userSlice.ts

"use client";
// Define the initial state using that type
const initialState = {
    id: 0,
    username: ''
};
const userSlice = (0,toolkit_namespaceObject.createSlice)({
    name: 'user',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        setUserInformation: (state, action)=>{
            state = action.payload;
        }
    }
});
const { setUserInformation  } = userSlice.actions;
// Other code such as selectors can use the imported `RootState` type
const getUserInfomation = (state)=>state.user
;
/* harmony default export */ const redux_userSlice = (userSlice.reducer);

;// CONCATENATED MODULE: ./src/redux/store.ts


const store = (0,toolkit_namespaceObject.configureStore)({
    reducer: {
        user: redux_userSlice
    }
});

;// CONCATENATED MODULE: ./src/redux/ReduxProvinder.tsx




"use client";
function ReduxProvider({ children  }) {
    return(/*#__PURE__*/ jsx_runtime_.jsx(external_react_redux_namespaceObject.Provider, {
        store: store,
        children: children
    }));
}
/* harmony default export */ const ReduxProvinder = (ReduxProvider);

;// CONCATENATED MODULE: ./src/@core/context/settingsContext.tsx

// ** React Imports

// ** ThemeConfig Import


const initialSettings = {
    themeColor: 'primary',
    mode: themeConfig/* default.mode */.Z.mode,
    contentWidth: themeConfig/* default.contentWidth */.Z.contentWidth
};
// ** Create Context
const SettingsContext = /*#__PURE__*/ (0,external_react_.createContext)({
    saveSettings: ()=>null
    ,
    settings: initialSettings
});
const SettingsProvider = ({ children  })=>{
    // ** State
    const { 0: settings , 1: setSettings  } = (0,external_react_.useState)({
        ...initialSettings
    });
    const saveSettings = (updatedSettings)=>{
        setSettings(updatedSettings);
    };
    return(/*#__PURE__*/ jsx_runtime_.jsx(ReduxProvinder, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(SettingsContext.Provider, {
            value: {
                settings,
                saveSettings
            },
            children: children
        })
    }));
};
const SettingsConsumer = SettingsContext.Consumer;

;// CONCATENATED MODULE: ./src/@core/hooks/useSettings.ts


const useSettings = ()=>(0,external_react_.useContext)(SettingsContext)
;

;// CONCATENATED MODULE: ./src/layouts/UserLayout.tsx


// ** Layout Imports
// !Do not remove this Layout import

// ** Navigation Imports

// ** Component Import

// ** Hook Import

// ** React Imports
"use client";
const UserLayout = ({ children  })=>{
    // ** Hooks
    const { settings , saveSettings  } = useSettings();
    /**
   *  The below variable will hide the current layout menu at given screen size.
   *  The menu will be accessible from the Hamburger icon only (Vertical Overlay Menu).
   *  You can change the screen size from which you want to hide the current layout menu.
   *  Please refer useMediaQuery() hook: https://mui.com/components/use-media-query/,
   *  to know more about what values can be passed to this hook.
   *  ! Do not change this value unless you know what you are doing. It can break the template.
   */ const hidden = useMediaQuery_default()((theme)=>theme.breakpoints.down('lg')
    );
    return(/*#__PURE__*/ jsx_runtime_.jsx(layouts_VerticalLayout, {
        hidden: hidden,
        settings: settings,
        saveSettings: saveSettings,
        verticalNavItems: vertical(),
        // afterVerticalNavMenuContent={UpgradeToProImg}
        verticalAppBarContent: (props // AppBar Content
        )=>/*#__PURE__*/ jsx_runtime_.jsx(vertical_AppBarContent, {
                hidden: hidden,
                settings: settings,
                saveSettings: saveSettings,
                toggleNavVisibility: props.toggleNavVisibility
            })
        ,
        children: children
    }));
};
/* harmony default export */ const layouts_UserLayout = (UserLayout);

// EXTERNAL MODULE: ./src/@core/utils/create-emotion-cache.ts + 1 modules
var create_emotion_cache = __webpack_require__(6950);
;// CONCATENATED MODULE: ./src/pages/_app.tsx



// ** Loader Import


// ** Config Imports

// ** Component Imports


// ** Contexts

// ** Utils Imports

// ** React Perfect Scrollbar Style

// ** Global css styles



// ** Next Imports
"use client";
const clientSideEmotionCache = (0,create_emotion_cache/* createEmotionCache */.S)();
// ** Pace Loader
if (themeConfig/* default.routingLoader */.Z.routingLoader) {
    router_.Router.events.on('routeChangeStart', ()=>{
        external_nprogress_default().start();
    });
    router_.Router.events.on('routeChangeError', ()=>{
        external_nprogress_default().done();
    });
    router_.Router.events.on('routeChangeComplete', ()=>{
        external_nprogress_default().done();
    });
}
// ** Configure JSS & ClassName
const App = (props)=>{
    const { Component , emotionCache =clientSideEmotionCache , pageProps  } = props;
    const router = (0,router_.useRouter)();
    const token = external_js_cookie_default().get('access_token');
    const getLayout = Component.getLayout ?? ((page)=>/*#__PURE__*/ jsx_runtime_.jsx(layouts_UserLayout, {
            children: page
        })
    );
    (0,external_react_.useEffect)(()=>{
        !token ? router.push('/auth/login') : getLayout;
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        token
    ]);
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_namespaceObject.CacheProvider, {
        value: emotionCache,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: `${themeConfig/* default.templateName */.Z.templateName} - Material Design React Admin Template`
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "description",
                        content: `${themeConfig/* default.templateName */.Z.templateName}`
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "keywords",
                        content: "Material Design, MUI, Admin Template, React Admin Template"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "viewport",
                        content: "initial-scale=1, width=device-width"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(SettingsProvider, {
                children: /*#__PURE__*/ jsx_runtime_.jsx(SettingsConsumer, {
                    children: ({ settings  })=>{
                        return(/*#__PURE__*/ jsx_runtime_.jsx(theme_ThemeComponent, {
                            settings: settings,
                            children: getLayout(/*#__PURE__*/ jsx_runtime_.jsx(Component, {
                                ...pageProps
                            }))
                        }));
                    }
                })
            })
        ]
    }));
};
/* harmony default export */ const _app = (App);


/***/ }),

/***/ 2120:
/***/ ((module) => {

module.exports = require("@mui/material/Avatar");

/***/ }),

/***/ 19:
/***/ ((module) => {

module.exports = require("@mui/material/Box");

/***/ }),

/***/ 8369:
/***/ ((module) => {

module.exports = require("@mui/material/Chip");

/***/ }),

/***/ 3646:
/***/ ((module) => {

module.exports = require("@mui/material/Divider");

/***/ }),

/***/ 7934:
/***/ ((module) => {

module.exports = require("@mui/material/IconButton");

/***/ }),

/***/ 3103:
/***/ ((module) => {

module.exports = require("@mui/material/InputAdornment");

/***/ }),

/***/ 8125:
/***/ ((module) => {

module.exports = require("@mui/material/Menu");

/***/ }),

/***/ 9271:
/***/ ((module) => {

module.exports = require("@mui/material/MenuItem");

/***/ }),

/***/ 6042:
/***/ ((module) => {

module.exports = require("@mui/material/TextField");

/***/ }),

/***/ 7163:
/***/ ((module) => {

module.exports = require("@mui/material/Typography");

/***/ }),

/***/ 8442:
/***/ ((module) => {

module.exports = require("@mui/material/styles");

/***/ }),

/***/ 9868:
/***/ ((module) => {

module.exports = require("@mui/material/useMediaQuery");

/***/ }),

/***/ 2167:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 6734:
/***/ ((module) => {

module.exports = require("js-cookie");

/***/ }),

/***/ 2542:
/***/ ((module) => {

module.exports = require("mdi-material-ui/AccountCogOutline");

/***/ }),

/***/ 7143:
/***/ ((module) => {

module.exports = require("mdi-material-ui/AccountOutline");

/***/ }),

/***/ 562:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [730,664,463,87], () => (__webpack_exec__(4795)));
module.exports = __webpack_exports__;

})();