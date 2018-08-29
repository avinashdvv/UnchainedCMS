/* eslint-disable */

window.unchainedSite = {
  data: [
    {
      meta: {
        type: "home.HomePage",
        search_description: "",
        html_url: "http://localhost/blog2-test/",
        first_published_at: "2018-08-03T04:08:42.880537Z",
        show_in_menus: false,
        slug: "/",
        detail_url: "http://localhost/api/v2/pages/7/",
        seo_title: ""
      },
      title: "Blog2 Test",
      body: [
        {
          value: {
            className: {
              text: "class name for logo component"
            },
            children: [
              {
                value: {
                  className: {
                    text: "class name for TopHeader component"
                  },
                  children: [
                    {
                      value: {
                        children: [
                          {
                            value: {
                              altText: "BMO Equity Logo",
                              logoText: "Equity Research",
                              image:
                                "https://bmo-capital-markets-osqa-ui-equity.galepartners.com//media/original_images/BMO_logo_white_3x.png"
                            },
                            type: "UnchainedCtrlImageBlock",
                            id: "BMO_logo",
                            parent_id: "Logo_id"
                          }
                        ]
                      },
                      type: "Logo",
                      parent_id: "TopHeader_id",
                      id: "Logo_id",
                      isEditable: true
                    },
                    {
                      value: {
                        children: [
                          {
                            value: {
                              children: [
                                {
                                  value: {
                                    text: "Capital Markets",
                                    to: {
                                      url:
                                        "https://bmo-capital-markets-osqa-ui-equity.galepartners.com/",
                                      link_target: "newTab",
                                      link_type: "generic"
                                    }
                                  },
                                  id: "Link_1",
                                  parent_id: "TopHeaderMenuItem_1_id",
                                  type: "UnchainedCtrlCharBlock"
                                }
                              ]
                            },
                            type: "TopHeaderMenuItem",
                            id: "TopHeaderMenuItem_1_id",
                            parent_id: "TopHeaderMenuLeftLink_id",
                            isEditable: true
                          },
                          {
                            value: {
                              children: [
                                {
                                  value: {
                                    text: "Capital Markets",
                                    to: {
                                      url:
                                        "https://bmo-capital-markets-osqa-ui-equity.galepartners.com/",
                                      link_target: "newTab",
                                      link_type: "generic"
                                    }
                                  },
                                  type: "UnchainedCtrlCharBlock",
                                  id: "Link_2",
                                  parent_id: "TopHeaderMenuItem_2_id"
                                }
                              ]
                            },
                            type: "TopHeaderMenuItem",
                            id: "TopHeaderMenuItem_2_id",
                            parent_id: "TopHeaderMenuLeftLink_id"
                          }
                        ]
                      },
                      parent_id: "TopHeader_id",
                      id: "TopHeaderMenuLeftLink_id",
                      type: "TopHeaderMenuLeftLink"
                    }
                  ]
                },
                type: "TopHeader",
                id: "TopHeader_id"
              }
            ]
          },
          type: "Header",
          id: "Header_id"
        },
        {
          value: {
            className: {
              text: "className for main carousel"
            },
            children: [
              {
                value: {
                  className: {
                    text: "class name for LollypopCarouselItem component"
                  },
                  children: [
                    {
                      value: {
                        image:
                          "https://bmo-capital-markets-osqa-ui-equity.galepartners.com//media/original_images/Homepage_Carousel_Background.png",
                        altText: "Homepage Carousel Background"
                      },
                      type: "UnchainedCtrlImageBlock",
                      id: "backgroundImage_id",
                      parent_id: "LollypopCasouselItem_Id"
                    },
                    {
                      value: {
                        richText:
                          '<div class="rich-text"><h1>Check out our new <b>Enhanced Search</b></h1><p>Get to what you need faster and easier than ever before.</p></div>'
                      },
                      type: "UnchainedCtrlRichTextBlock",
                      id: "richText_id",
                      parent_id: "LollypopCasouselItem_Id"
                    },
                    {
                      value: {
                        text: "Learn More"
                      },
                      type: "UnchainedCtrlCharBlock",
                      id: "learMoreText_id",
                      parent_id: "LollypopCasouselItem_Id"
                    },
                    {
                      value: {
                        checkbox: false,
                        label: "Show Play Icon"
                      },
                      type: "UnchainedCtrlBooleanBlock",
                      id: "isPlayIcon_id",
                      parent_id: "LollypopCasouselItem_Id"
                    },
                    {
                      value: {
                        text: "#ed1c24"
                      },
                      type: "UnchainedCtrlCharBlock",
                      id: "lollopopColor_id",
                      parent_id: "LollypopCasouselItem_Id"
                    }
                  ]
                },
                isEditable: true,
                type: "LollypopCarouselItem",
                id: "LollypopCasouselItem_Id",
                parent_id: "LollypopCarousel_Id"
              },
              {
                value: {
                  className: {
                    text: "class name for LollypopCarouselItem component"
                  },
                  children: [
                    {
                      value: {
                        image:
                          "https://bmo-capital-markets-osqa-ui-equity.galepartners.com//media/original_images/Homepage_Carousel_Background.png",
                        altText: "Homepage Carousel Background"
                      },
                      type: "UnchainedCtrlImageBlock",
                      id: "backgroundImage_id",
                      parent_id: "LollypopCasouselItem_Id"
                    },
                    {
                      value: {
                        richText:
                          '<div class="rich-text"><h1>Check out our new <b>Enhanced Search</b></h1><p>Get to what you need faster and easier than ever before.</p></div>'
                      },
                      type: "UnchainedCtrlRichTextBlock",
                      id: "richText_id",
                      parent_id: "LollypopCasouselItem_Id"
                    },
                    {
                      value: {
                        text: "Learn More"
                      },
                      type: "UnchainedCtrlCharBlock",
                      id: "learMoreText_id",
                      parent_id: "LollypopCasouselItem_Id"
                    },
                    {
                      value: {
                        checkbox: false,
                        label: "Show Play Icon"
                      },
                      type: "UnchainedCtrlBooleanBlock",
                      id: "isPlayIcon_id",
                      parent_id: "LollypopCasouselItem_Id"
                    },
                    {
                      value: {
                        text: "green"
                      },
                      type: "UnchainedCtrlCharBlock",
                      id: "lollopopColor_id",
                      parent_id: "LollypopCasouselItem_Id"
                    }
                  ]
                },
                type: "LollypopCarouselItem",
                id: "LollypopCasouselItem_Id",
                parent_id: "LollypopCarousel_Id"
              }
            ]
          },
          isRearrange: true,
          carouselType: "main-page-carousel",
          type: "LollypopCarousel",
          id: "LollypopCarousel_Id"
        },
        {
          value: {
            className: {
              text: "className for main featured Research"
            },
            children: [
              {
                value: {
                  className: {
                    text: "class name for featured research component"
                  },
                  children: [
                    {
                      value: {
                        text: "Featured Research"
                      },
                      type: "UnchainedCtrlCharBlock",
                      parent_id: "a823d081-f64d-4ddc-a45c-e87affad6c1e",
                      id: "58f87ffe-0c72-4715-a644-9d80809de963"
                    },
                    {
                      value: {
                        richText:
                          "<p>Our latest thematic or in-depth research focused on what clients are looking to understand.</p>"
                      },
                      type: "UnchainedCtrlRichTextBlock",
                      parent_id: "a823d081-f64d-4ddc-a45c-e87affad6c1e",
                      id: "91534b0a-a34e-49b5-bd76-04713c9ca532"
                    },
                    {
                      value: {
                        image:
                          "https://bmo-capital-markets-osqa-ui-equity.galepartners.com//media/original_images/F818811F-2C8E-4546-BF48-CE5E75DF7214.png",
                        altText: "image"
                      },
                      type: "UnchainedCtrlImageBlock",
                      parent_id: "a823d081-f64d-4ddc-a45c-e87affad6c1e",
                      id: "a26f614b-0830-41e3-a685-feb3076794a5"
                    },
                    {
                      value: {
                        image:
                          "https://bmo-capital-markets-osqa-ui-equity.galepartners.com//media/original_images/Chevron_Heavier2x.png",
                        altText: "image"
                      },
                      type: "UnchainedCtrlImageBlock",
                      parent_id: "a823d081-f64d-4ddc-a45c-e87affad6c1e",
                      id: "2d60fa6c-846c-4359-b51e-acd6f2f8d65c"
                    },
                    {
                      value: {
                        image: 1,
                        altText: "image"
                      },
                      type: "UnchainedCtrlImageBlock",
                      parent_id: "a823d081-f64d-4ddc-a45c-e87affad6c1e",
                      id: "09b40cb2-d95a-48b9-868e-502ec1a6fa18"
                    }
                  ]
                },
                type: "FeaturedResearchComponent",
                parent_id: "466130e3-99e2-447e-bf72-dab678fbdfe2",
                id: "a823d081-f64d-4ddc-a45c-e87affad6c1e"
              },
              {
                value: {
                  className: {
                    text: "think series class name"
                  },
                  children: [
                    {
                      value: {
                        text: "Think series"
                      },
                      type: "UnchainedCtrlCharBlock",
                      parent_id: "813ceb93-e7f0-49c0-b0fa-d46914f17fa6",
                      id: "5d68f9ce-9df7-4895-a940-e563b55bbade"
                    },
                    {
                      value: {
                        richText:
                          "<p>Our Thinks Series events bring clients and industry specialists together to address trends within the marketplace.</p>"
                      },
                      type: "UnchainedCtrlRichTextBlock",
                      parent_id: "813ceb93-e7f0-49c0-b0fa-d46914f17fa6",
                      id: "3bd9fe78-611f-4cb0-9232-5c6b9dddb249"
                    },
                    {
                      value: {
                        image:
                          "https://bmo-capital-markets-osqa-ui-equity.galepartners.com//media/original_images/1995B7E8-7CF8-4297-B5F0-DED7CBB5AE05.png",
                        altText: "image"
                      },
                      type: "UnchainedCtrlImageBlock",
                      parent_id: "813ceb93-e7f0-49c0-b0fa-d46914f17fa6",
                      id: "d5730f63-a821-49d9-925d-a4ffc011cdda"
                    },
                    {
                      value: {
                        image:
                          "https://bmo-capital-markets-osqa-ui-equity.galepartners.com//media/original_images/Chevron_Heavier2x.png",
                        altText: "image"
                      },
                      type: "UnchainedCtrlImageBlock",
                      parent_id: "813ceb93-e7f0-49c0-b0fa-d46914f17fa6",
                      id: "dcf6442a-1e1f-45e2-8e53-c33b44530aab"
                    },
                    {
                      value: {
                        image: 1,
                        altText: "image"
                      },
                      type: "UnchainedCtrlImageBlock",
                      parent_id: "813ceb93-e7f0-49c0-b0fa-d46914f17fa6",
                      id: "c95072fe-573c-4bd2-b3f2-9c8e99b90814"
                    }
                  ]
                },
                type: "FeaturedResearchComponent",
                parent_id: "466130e3-99e2-447e-bf72-dab678fbdfe2",
                id: "813ceb93-e7f0-49c0-b0fa-d46914f17fa6"
              },
              {
                value: {
                  className: {
                    text: "Industry conference class name"
                  },
                  children: [
                    {
                      value: {
                        text: "Industry conference"
                      },
                      type: "UnchainedCtrlCharBlock",
                      parent_id: "b2f41ff0-e967-4402-a008-ead8e7647ed8",
                      id: "0fdf98d5-5bab-4cdc-bcab-90260b975f16"
                    },
                    {
                      value: {
                        richText:
                          "<p>Our industry-focused conferences provide a forum between institutional clients and corporate executives.</p>"
                      },
                      type: "UnchainedCtrlRichTextBlock",
                      parent_id: "b2f41ff0-e967-4402-a008-ead8e7647ed8",
                      id: "87691ba2-5213-48a7-879a-4f2a65bcfe8a"
                    },
                    {
                      value: {
                        image:
                          "https://bmo-capital-markets-osqa-ui-equity.galepartners.com//media/original_images/F1426582-F184-4A62-8EDB-41E2192FAC1F_1.png",
                        altText: "image"
                      },
                      type: "UnchainedCtrlImageBlock",
                      parent_id: "b2f41ff0-e967-4402-a008-ead8e7647ed8",
                      id: "b0ae6630-8560-4cdf-87df-0c1ec16156ed"
                    },
                    {
                      value: {
                        image:
                          "https://bmo-capital-markets-osqa-ui-equity.galepartners.com//media/original_images/Chevron_Heavier2x.png",
                        altText: "image"
                      },
                      type: "UnchainedCtrlImageBlock",
                      parent_id: "b2f41ff0-e967-4402-a008-ead8e7647ed8",
                      id: "45ec3f1c-6fc2-4fba-bd92-0c80e32a01a5"
                    },
                    {
                      value: {
                        image: 1,
                        altText: "image"
                      },
                      type: "UnchainedCtrlImageBlock",
                      parent_id: "b2f41ff0-e967-4402-a008-ead8e7647ed8",
                      id: "7a58776a-1d8d-443c-bec7-710c0ed801dc"
                    }
                  ]
                },
                isEditable: true,
                type: "FeaturedResearchComponent",
                parent_id: "466130e3-99e2-447e-bf72-dab678fbdfe2",
                id: "b2f41ff0-e967-4402-a008-ead8e7647ed8"
              },
              {
                value: {
                  className: {
                    text: "BMO cata class name"
                  },
                  children: [
                    {
                      value: {
                        text: "BMO Data"
                      },
                      type: "UnchainedCtrlCharBlock",
                      parent_id: "c6d00192-54b9-4869-bca1-de31eb14ad57",
                      id: "e22e1a56-b30f-46b6-a33a-0d80ef6a7c3b"
                    },
                    {
                      value: {
                        richText:
                          "<p>Our industry-focused conferences provide a forum between institutional clients and corporate executives.</p>"
                      },
                      type: "UnchainedCtrlRichTextBlock",
                      parent_id: "c6d00192-54b9-4869-bca1-de31eb14ad57",
                      id: "e1952de0-49a0-4b90-b1cd-f0f0ee72f47f"
                    },
                    {
                      value: {
                        image:
                          "https://bmo-capital-markets-osqa-ui-equity.galepartners.com//media/original_images/7219CCDE-0AD0-4089-A459-A7143A0DB226.png",
                        altText: "image"
                      },
                      type: "UnchainedCtrlImageBlock",
                      parent_id: "c6d00192-54b9-4869-bca1-de31eb14ad57",
                      id: "8b2caaa8-9628-4cb9-8264-8c7c5d0cc5e3"
                    },
                    {
                      value: {
                        image:
                          "https://bmo-capital-markets-osqa-ui-equity.galepartners.com//media/original_images/Chevron_Heavier2x.png",
                        altText: "image"
                      },
                      type: "UnchainedCtrlImageBlock",
                      parent_id: "c6d00192-54b9-4869-bca1-de31eb14ad57",
                      id: "ea849ac9-7585-4524-8fdd-ed8348e60266"
                    },
                    {
                      value: {
                        image: 1,
                        altText: "image"
                      },
                      type: "UnchainedCtrlImageBlock",
                      parent_id: "c6d00192-54b9-4869-bca1-de31eb14ad57",
                      id: "5f1d43b2-a4f5-42cd-b344-3002e625810a"
                    }
                  ]
                },
                type: "FeaturedResearchComponent",
                parent_id: "466130e3-99e2-447e-bf72-dab678fbdfe2",
                id: "c6d00192-54b9-4869-bca1-de31eb14ad57"
              }
            ]
          },
          isRearrange: true,
          isCreateNew: true,
          type: "FeaturedResearch",
          id: "466130e3-99e2-447e-bf72-dab678fbdfe2"
        },
        {
          value: {
            className: {
              text: "GIC section Main Class Name"
            },
            children: [
              {
                value: {
                  richText:
                    '<div class="rich-text"><h1 style="text-align: center;">About BMO Research</h1><p style="text-align: center;">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.<br/></p></div>'
                },
                type: "UnchainedCtrlRichTextBlock",
                parent_id: "8a23ace1-7734-4113-8d70-5e87118396a5",
                id: "40f4292f-b1ad-4411-ba22-c069cb770341"
              },
              {
                value: {
                  className: {
                    text: "gics 1"
                  },
                  children: [
                    {
                      value: {
                        image:
                          "https://bmo-capital-markets-osqa-ui-equity.galepartners.com//media/original_images/1.png",
                        altText: "image"
                      },
                      type: "UnchainedCtrlImageBlock",
                      parent_id: "076f8ee5-bfb6-4ab3-92f1-66a8487114e9",
                      id: "189a0956-8d4b-4fe0-8f38-48ea9b03daf1"
                    },
                    {
                      value: {
                        text: "Energy"
                      },
                      type: "UnchainedCtrlCharBlock",
                      parent_id: "076f8ee5-bfb6-4ab3-92f1-66a8487114e9",
                      id: "0e3832a4-aa47-4fe3-bb98-42db2dbee6d0"
                    }
                  ]
                },
                type: "GICIcon",
                parent_id: "8a23ace1-7734-4113-8d70-5e87118396a5",
                id: "076f8ee5-bfb6-4ab3-92f1-66a8487114e9"
              },
              {
                value: {
                  className: {
                    text: "gics 2"
                  },
                  children: [
                    {
                      value: {
                        image:
                          "https://bmo-capital-markets-osqa-ui-equity.galepartners.com//media/original_images/2.png",
                        altText: "image"
                      },
                      type: "UnchainedCtrlImageBlock",
                      parent_id: "ae35518f-27cb-46d2-9bd3-aca633f22680",
                      id: "be0b6333-7b4e-4006-ae72-019ab53362c8"
                    },
                    {
                      value: {
                        text: "Materials"
                      },
                      type: "UnchainedCtrlCharBlock",
                      parent_id: "ae35518f-27cb-46d2-9bd3-aca633f22680",
                      id: "e0b70506-a760-4005-840a-96de5b31a3ab"
                    }
                  ]
                },
                type: "GICIcon",
                parent_id: "8a23ace1-7734-4113-8d70-5e87118396a5",
                id: "ae35518f-27cb-46d2-9bd3-aca633f22680"
              },
              {
                value: {
                  className: {
                    text: "gics 3"
                  },
                  children: [
                    {
                      value: {
                        image:
                          "https://bmo-capital-markets-osqa-ui-equity.galepartners.com//media/original_images/3.png",
                        altText: "image"
                      },
                      type: "UnchainedCtrlImageBlock",
                      parent_id: "221abcca-be9e-41e8-8f45-08097d807807",
                      id: "534df3a1-bdf4-4aba-b8a2-c1b73cddc30e"
                    },
                    {
                      value: {
                        text: "Industrials"
                      },
                      type: "UnchainedCtrlCharBlock",
                      parent_id: "221abcca-be9e-41e8-8f45-08097d807807",
                      id: "c3a305ee-8b44-4e29-9881-eba7acb64fc5"
                    }
                  ]
                },
                type: "GICIcon",
                parent_id: "8a23ace1-7734-4113-8d70-5e87118396a5",
                id: "221abcca-be9e-41e8-8f45-08097d807807"
              },
              {
                value: {
                  className: {
                    text: "gics 4"
                  },
                  children: [
                    {
                      value: {
                        image:
                          "https://bmo-capital-markets-osqa-ui-equity.galepartners.com//media/original_images/4.png",
                        altText: "image"
                      },
                      type: "UnchainedCtrlImageBlock",
                      parent_id: "2269d66f-b21b-4425-949c-26cdc31d1e3f",
                      id: "1d016030-d394-48ed-928b-ab942603dc2c"
                    },
                    {
                      value: {
                        text: "Consumer Discretionary"
                      },
                      type: "UnchainedCtrlCharBlock",
                      parent_id: "2269d66f-b21b-4425-949c-26cdc31d1e3f",
                      id: "99c9150c-6ed7-4231-ba19-e81ba163540b"
                    }
                  ]
                },
                type: "GICIcon",
                parent_id: "8a23ace1-7734-4113-8d70-5e87118396a5",
                id: "2269d66f-b21b-4425-949c-26cdc31d1e3f"
              }
            ]
          },
          isRearrange: true,
          isCreateNew: true,
          type: "GICSection",
          id: "8a23ace1-7734-4113-8d70-5e87118396a5"
        },
        {
          value: {
            children: [
              {
                value: {
                  children: [
                    {
                      value: {
                        children: [
                          {
                            value: {
                              children: [
                                {
                                  value: {
                                    text: "Disclosure Statements",
                                    forLoggedInUserField: false,
                                    forRDSUserField: false,
                                    to: {
                                      url: "/disclosure/",
                                      link_target: "sameTab",
                                      link_type: "generic"
                                    }
                                  },
                                  type: "UnchainedCtrlCharBlock",
                                  id: "Footer_link_id_1",
                                  parent_id: "FooterLink_id"
                                }
                              ]
                            },
                            type: "FooterLink",
                            sectionTitle: "Legal",
                            id: "FooterLink_id",
                            isEditable: true,
                            parent_id: "FooterLinkColumn_id"
                          }
                        ]
                      },
                      type: "FooterLinkColumn",
                      id: "FooterLinkColumn_id",
                      parent_id: "FooterLinkSection_id"
                    }
                  ]
                },
                type: "FooterLinkSection",
                id: "FooterLinkSection_id",
                parent_id: "Footer_id"
              }
            ]
          },
          type: "Footer",
          id: "Footer_id"
        }
      ],
      id: 4
    },
    {
      meta: {
        type: "home.HomePage",
        search_description: "",
        html_url: "http://localhost/",
        first_published_at: null,
        show_in_menus: false,
        slug: "bls",
        detail_url: "http://localhost/api/v2/pages/3/",
        seo_title: ""
      },
      title: "Home",
      id: 3
    }
  ]
};
