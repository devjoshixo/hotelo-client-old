const hotel = {
  __typename: 'PropertyInfo',
  summary: {
    __typename: 'PropertySummary',
    fees: null,
    id: '66932918',
    name: 'Hotel CUBE Prague',
    map: {
      __typename: 'PropertyInfoMap',
      markers: [
        {
          __typename: 'PointOfInterest',
          mapMarker: {
            __typename: 'MapMarker',
            icon: 'AIRPORT',
            latLong: {
              __typename: 'Coordinates',
              latitude: 50.10769,
              longitude: 14.26755,
            },
            type: 'POI',
          },
          poiContent: null,
          subtitle: '34 min drive',
          title: 'Prague (PRG-Vaclav Havel)',
        },
        {
          __typename: 'PointOfInterest',
          mapMarker: {
            __typename: 'MapMarker',
            icon: 'AIRPORT',
            latLong: {
              __typename: 'Coordinates',
              latitude: 50.216667,
              longitude: 14.395556,
            },
            type: 'POI',
          },
          poiContent: null,
          subtitle: '47 min drive',
          title: 'Vodochody Airport (VOD)',
        },
        {
          __typename: 'PointOfInterest',
          mapMarker: {
            __typename: 'MapMarker',
            icon: 'HOTEL',
            latLong: {
              __typename: 'Coordinates',
              latitude: 50.079023,
              longitude: 14.417016,
            },
            type: 'HOTEL',
          },
          poiContent: {
            __typename: 'PoiContent',
            description: null,
            id: '66932918',
            image: null,
          },
          subtitle: null,
          title: 'Hotel CUBE Prague',
        },
      ],
    },
    policies: {
      __typename: 'PropertyPolicies',
      checkinEnd: null,
      checkinInstructions: [
        'This property offers transfers from the airport (surcharges may apply); guests must contact the property with arrival details before travel, using the contact information on the booking confirmation',
        'Guests will receive an email 24 hours before arrival with check-in instructions; front desk staff will greet guests on arrival',
        'If you are planning to arrive after 2:00 PM please contact the property in advance using the information on the booking confirmation',
        'At check-in, guests must provide a record of full COVID-19 vaccination',
      ],
      checkinMinAge: null,
      checkinStart: null,
      checkoutTime: null,
      childAndBed: null,
      needToKnow: {
        __typename: 'PropertyInfoSubSection',
        body: ['This property accepts credit cards and cash.'],
        descriptions: [],
        title: 'You need to know',
      },
      paymentOptions: [],
      pets: {
        __typename: 'PropertyInfoSubSection',
        body: ['Pets not allowed', 'Service animals welcome'],
        descriptions: [],
        title: 'Pets',
      },
      shouldMention: {
        __typename: 'PropertyInfoSubSection',
        body: ['Parking height restrictions apply'],
        descriptions: [],
        title: 'We should mention',
      },
    },
    telesalesPhoneNumber: '',
    bannerMessage: null,
    latinAlphabetName: '',
    tagline:
      'Central hotel with restaurant, connected to a shopping center, near Dancing House\n',
    starRatingIcon: {
      __typename: 'Icon',
      token: 'STAR',
    },
    overview: {
      __typename: 'PropertyOverview',
      vipMessaging: null,
      inventoryType: null,
      accessibilityLabel: 'Overview of Hotel CUBE Prague',
      label: null,
      propertyRating: {
        __typename: 'EGDSIconRating',
        rating: 3.5,
        accessibility: '3.5 star property',
        icon: {
          __typename: 'Icon',
          id: 'star',
          description: 'star rating',
          size: null,
          token: 'icon__star',
          theme: null,
        },
      },
    },
    featuredMessages: null,
    spaceOverview: null,
    amenities: {
      __typename: 'PropertyAmenities',
      amenities: [
        {
          __typename: 'PropertyInfoSection',
          title: 'At a glance',
          sections: [],
          header: {
            __typename: 'LodgingHeader',
            icon: null,
            text: 'At a glance',
            subText: null,
          },
          contents: [
            {
              __typename: 'PropertyInfoContent',
              header: {
                __typename: 'LodgingHeader',
                text: 'Hotel size',
                subText: null,
                mark: null,
              },
              icon: {
                __typename: 'Icon',
                id: 'done',
                description: '',
                size: null,
                token: 'done',
                theme: null,
              },
              jumpLink: null,
              items: [
                {
                  __typename: 'PropertyInfoItem',
                  text: '71 rooms',
                  state: null,
                  moreInfo: null,
                  icon: null,
                },
                {
                  __typename: 'PropertyInfoItem',
                  text: 'Arranged over 5 floors',
                  state: null,
                  moreInfo: null,
                  icon: null,
                },
              ],
            },
            {
              __typename: 'PropertyInfoContent',
              header: {
                __typename: 'LodgingHeader',
                text: 'Arriving/Leaving',
                subText: null,
                mark: null,
              },
              icon: {
                __typename: 'Icon',
                id: 'done',
                description: '',
                size: null,
                token: 'done',
                theme: null,
              },
              jumpLink: null,
              items: [
                {
                  __typename: 'PropertyInfoItem',
                  text: 'Check-in time from 3:00 PM - midnight',
                  state: null,
                  moreInfo: null,
                  icon: null,
                },
                {
                  __typename: 'PropertyInfoItem',
                  text: 'Late check-in subject to availability',
                  state: null,
                  moreInfo: null,
                  icon: null,
                },
                {
                  __typename: 'PropertyInfoItem',
                  text: 'Minimum check-in age: 18 ',
                  state: null,
                  moreInfo: null,
                  icon: null,
                },
                {
                  __typename: 'PropertyInfoItem',
                  text: 'Check-out time is noon',
                  state: null,
                  moreInfo: null,
                  icon: null,
                },
              ],
            },
            {
              __typename: 'PropertyInfoContent',
              header: {
                __typename: 'LodgingHeader',
                text: 'Restrictions related to your trip',
                subText: null,
                mark: null,
              },
              icon: {
                __typename: 'Icon',
                id: 'done',
                description: '',
                size: null,
                token: 'done',
                theme: null,
              },
              jumpLink: null,
              items: [
                {
                  __typename: 'PropertyInfoItem',
                  text: 'Check COVID-19 restrictions.',
                  state: null,
                  moreInfo: null,
                  icon: null,
                },
                {
                  __typename: 'PropertyInfoItem',
                  text: 'At check-in, guests must provide a record of full COVID-19 vaccination',
                  state: null,
                  moreInfo: null,
                  icon: null,
                },
              ],
            },
            {
              __typename: 'PropertyInfoContent',
              header: {
                __typename: 'LodgingHeader',
                text: 'Special check-in instructions',
                subText: null,
                mark: null,
              },
              icon: {
                __typename: 'Icon',
                id: 'done',
                description: '',
                size: null,
                token: 'done',
                theme: null,
              },
              jumpLink: null,
              items: [
                {
                  __typename: 'PropertyInfoItem',
                  text: 'This property offers transfers from the airport (surcharges may apply); guests must contact the property with arrival details before travel, using the contact information on the booking confirmation',
                  state: null,
                  moreInfo: null,
                  icon: null,
                },
                {
                  __typename: 'PropertyInfoItem',
                  text: 'Guests will receive an email 24 hours before arrival with check-in instructions; front desk staff will greet guests on arrival',
                  state: null,
                  moreInfo: null,
                  icon: null,
                },
                {
                  __typename: 'PropertyInfoItem',
                  text: 'If you are planning to arrive after 2:00 PM please contact the property in advance using the information on the booking confirmation',
                  state: null,
                  moreInfo: null,
                  icon: null,
                },
                {
                  __typename: 'PropertyInfoItem',
                  text: 'At check-in, guests must provide a record of full COVID-19 vaccination',
                  state: null,
                  moreInfo: null,
                  icon: null,
                },
              ],
            },
            {
              __typename: 'PropertyInfoContent',
              header: {
                __typename: 'LodgingHeader',
                text: 'Required at check-in',
                subText: null,
                mark: null,
              },
              icon: {
                __typename: 'Icon',
                id: 'done',
                description: '',
                size: null,
                token: 'done',
                theme: null,
              },
              jumpLink: null,
              items: [
                {
                  __typename: 'PropertyInfoItem',
                  text: 'Credit card, debit card, or cash deposit required for incidental charges',
                  state: null,
                  moreInfo: null,
                  icon: null,
                },
                {
                  __typename: 'PropertyInfoItem',
                  text: 'Government-issued photo ID may be required',
                  state: null,
                  moreInfo: null,
                  icon: null,
                },
                {
                  __typename: 'PropertyInfoItem',
                  text: 'Minimum check-in age is 18 ',
                  state: null,
                  moreInfo: null,
                  icon: null,
                },
              ],
            },
            {
              __typename: 'PropertyInfoContent',
              header: {
                __typename: 'LodgingHeader',
                text: 'Pets',
                subText: null,
                mark: null,
              },
              icon: {
                __typename: 'Icon',
                id: 'done',
                description: '',
                size: null,
                token: 'done',
                theme: null,
              },
              jumpLink: null,
              items: [
                {
                  __typename: 'PropertyInfoItem',
                  text: 'Pets not allowed',
                  state: null,
                  moreInfo: null,
                  icon: null,
                },
                {
                  __typename: 'PropertyInfoItem',
                  text: 'Service animals welcome',
                  state: null,
                  moreInfo: null,
                  icon: null,
                },
              ],
            },
            {
              __typename: 'PropertyInfoContent',
              header: {
                __typename: 'LodgingHeader',
                text: 'Internet',
                subText: null,
                mark: null,
              },
              icon: {
                __typename: 'Icon',
                id: 'wifi',
                description: '',
                size: null,
                token: 'wifi',
                theme: null,
              },
              jumpLink: null,
              items: [
                {
                  __typename: 'PropertyInfoItem',
                  text: 'Free WiFi in public areas',
                  state: null,
                  moreInfo: null,
                  icon: null,
                },
                {
                  __typename: 'PropertyInfoItem',
                  text: 'Free WiFi in rooms',
                  state: null,
                  moreInfo: null,
                  icon: null,
                },
              ],
            },
            {
              __typename: 'PropertyInfoContent',
              header: {
                __typename: 'LodgingHeader',
                text: 'Parking',
                subText: null,
                mark: null,
              },
              icon: {
                __typename: 'Icon',
                id: 'local_parking',
                description: '',
                size: null,
                token: 'local_parking',
                theme: null,
              },
              jumpLink: null,
              items: [
                {
                  __typename: 'PropertyInfoItem',
                  text: 'Secured covered onsite self parking (EUR 30 per day; includes in/out privileges)',
                  state: null,
                  moreInfo: null,
                  icon: null,
                },
                {
                  __typename: 'PropertyInfoItem',
                  text: 'Onsite parking limited',
                  state: null,
                  moreInfo: null,
                  icon: null,
                },
                {
                  __typename: 'PropertyInfoItem',
                  text: 'Height restrictions apply for onsite parking',
                  state: null,
                  moreInfo: null,
                  icon: null,
                },
              ],
            },
            {
              __typename: 'PropertyInfoContent',
              header: {
                __typename: 'LodgingHeader',
                text: 'Transfers',
                subText: null,
                mark: null,
              },
              icon: {
                __typename: 'Icon',
                id: 'done',
                description: '',
                size: null,
                token: 'done',
                theme: null,
              },
              jumpLink: null,
              items: [
                {
                  __typename: 'PropertyInfoItem',
                  text: 'Airport shuttle on request (available 24 hours)* ',
                  state: null,
                  moreInfo: null,
                  icon: null,
                },
              ],
            },
            {
              __typename: 'PropertyInfoContent',
              header: {
                __typename: 'LodgingHeader',
                text: 'Other information',
                subText: null,
                mark: null,
              },
              icon: {
                __typename: 'Icon',
                id: 'done',
                description: '',
                size: null,
                token: 'done',
                theme: null,
              },
              jumpLink: null,
              items: [
                {
                  __typename: 'PropertyInfoItem',
                  text: 'Smoke-free property',
                  state: null,
                  moreInfo: null,
                  icon: null,
                },
              ],
            },
          ],
        },
        {
          __typename: 'PropertyInfoSection',
          title: 'Property amenities',
          sections: [],
          header: {
            __typename: 'LodgingHeader',
            icon: null,
            text: 'Property amenities',
            subText: null,
          },
          contents: [
            {
              __typename: 'PropertyInfoContent',
              header: {
                __typename: 'LodgingHeader',
                text: 'Food and drink',
                subText: null,
                mark: null,
              },
              icon: {
                __typename: 'Icon',
                id: 'local_dining',
                description: '',
                size: null,
                token: 'local_dining',
                theme: null,
              },
              jumpLink: null,
              items: [
                {
                  __typename: 'PropertyInfoItem',
                  text: 'Buffet breakfast (surcharge) each morning 7:00 AM–10:30 AM',
                  state: null,
                  moreInfo: null,
                  icon: null,
                },
                {
                  __typename: 'PropertyInfoItem',
                  text: 'Restaurant',
                  state: null,
                  moreInfo: null,
                  icon: null,
                },
                {
                  __typename: 'PropertyInfoItem',
                  text: 'Bar/lounge',
                  state: null,
                  moreInfo: null,
                  icon: null,
                },
                {
                  __typename: 'PropertyInfoItem',
                  text: 'Coffee/tea in a common area',
                  state: null,
                  moreInfo: null,
                  icon: null,
                },
                {
                  __typename: 'PropertyInfoItem',
                  text: 'Water dispenser',
                  state: null,
                  moreInfo: null,
                  icon: null,
                },
              ],
            },
            {
              __typename: 'PropertyInfoContent',
              header: {
                __typename: 'LodgingHeader',
                text: 'Working away',
                subText: null,
                mark: null,
              },
              icon: {
                __typename: 'Icon',
                id: 'business_center',
                description: '',
                size: null,
                token: 'business_center',
                theme: null,
              },
              jumpLink: null,
              items: [
                {
                  __typename: 'PropertyInfoItem',
                  text: 'Conference space',
                  state: null,
                  moreInfo: null,
                  icon: null,
                },
              ],
            },
            {
              __typename: 'PropertyInfoContent',
              header: {
                __typename: 'LodgingHeader',
                text: 'Services',
                subText: null,
                mark: null,
              },
              icon: {
                __typename: 'Icon',
                id: 'room_service',
                description: '',
                size: null,
                token: 'room_service',
                theme: null,
              },
              jumpLink: null,
              items: [
                {
                  __typename: 'PropertyInfoItem',
                  text: '24-hour front desk',
                  state: null,
                  moreInfo: null,
                  icon: null,
                },
                {
                  __typename: 'PropertyInfoItem',
                  text: 'Tour/ticket assistance',
                  state: null,
                  moreInfo: null,
                  icon: null,
                },
                {
                  __typename: 'PropertyInfoItem',
                  text: 'Laundry facilities',
                  state: null,
                  moreInfo: null,
                  icon: null,
                },
                {
                  __typename: 'PropertyInfoItem',
                  text: 'Luggage storage',
                  state: null,
                  moreInfo: null,
                  icon: null,
                },
                {
                  __typename: 'PropertyInfoItem',
                  text: 'Wedding services',
                  state: null,
                  moreInfo: null,
                  icon: null,
                },
                {
                  __typename: 'PropertyInfoItem',
                  text: 'Multilingual staff',
                  state: null,
                  moreInfo: null,
                  icon: null,
                },
              ],
            },
            {
              __typename: 'PropertyInfoContent',
              header: {
                __typename: 'LodgingHeader',
                text: 'Facilities',
                subText: null,
                mark: null,
              },
              icon: {
                __typename: 'Icon',
                id: 'done',
                description: '',
                size: null,
                token: 'done',
                theme: null,
              },
              jumpLink: null,
              items: [
                {
                  __typename: 'PropertyInfoItem',
                  text: '2 buildings/towers',
                  state: null,
                  moreInfo: null,
                  icon: null,
                },
                {
                  __typename: 'PropertyInfoItem',
                  text: 'Television in common areas',
                  state: null,
                  moreInfo: null,
                  icon: null,
                },
                {
                  __typename: 'PropertyInfoItem',
                  text: 'Lockers available',
                  state: null,
                  moreInfo: null,
                  icon: null,
                },
              ],
            },
            {
              __typename: 'PropertyInfoContent',
              header: {
                __typename: 'LodgingHeader',
                text: 'Accessibility',
                subText: null,
                mark: null,
              },
              icon: {
                __typename: 'Icon',
                id: 'accessible',
                description: '',
                size: null,
                token: 'accessible',
                theme: null,
              },
              jumpLink: null,
              items: [
                {
                  __typename: 'PropertyInfoItem',
                  text: 'Braille/raised signage',
                  state: null,
                  moreInfo: null,
                  icon: null,
                },
                {
                  __typename: 'PropertyInfoItem',
                  text: 'Elevator',
                  state: null,
                  moreInfo: null,
                  icon: null,
                },
                {
                  __typename: 'PropertyInfoItem',
                  text: 'Wheelchair-accessible path to elevator',
                  state: null,
                  moreInfo: null,
                  icon: null,
                },
                {
                  __typename: 'PropertyInfoItem',
                  text: 'Wheelchair-accessible registration desk',
                  state: null,
                  moreInfo: null,
                  icon: null,
                },
                {
                  __typename: 'PropertyInfoItem',
                  text: 'Wheelchair-accessible business center',
                  state: null,
                  moreInfo: null,
                  icon: null,
                },
                {
                  __typename: 'PropertyInfoItem',
                  text: 'Handrails in hallways',
                  state: null,
                  moreInfo: null,
                  icon: null,
                },
                {
                  __typename: 'PropertyInfoItem',
                  text: 'Handrails in stairways',
                  state: null,
                  moreInfo: null,
                  icon: null,
                },
                {
                  __typename: 'PropertyInfoItem',
                  text: 'Wheelchairs available on site',
                  state: null,
                  moreInfo: null,
                  icon: null,
                },
              ],
            },
          ],
        },
        {
          __typename: 'PropertyInfoSection',
          title: 'Room amenities',
          sections: [],
          header: {
            __typename: 'LodgingHeader',
            icon: null,
            text: 'Room amenities',
            subText: null,
          },
          contents: [
            {
              __typename: 'PropertyInfoContent',
              header: {
                __typename: 'LodgingHeader',
                text: 'Be entertained',
                subText: null,
                mark: null,
              },
              icon: {
                __typename: 'Icon',
                id: 'done',
                description: '',
                size: null,
                token: 'done',
                theme: null,
              },
              jumpLink: null,
              items: [
                {
                  __typename: 'PropertyInfoItem',
                  text: '43-inch flat-screen TV',
                  state: null,
                  moreInfo: null,
                  icon: null,
                },
                {
                  __typename: 'PropertyInfoItem',
                  text: 'Satellite TV channels',
                  state: null,
                  moreInfo: null,
                  icon: null,
                },
              ],
            },
            {
              __typename: 'PropertyInfoContent',
              header: {
                __typename: 'LodgingHeader',
                text: 'Home comfort',
                subText: null,
                mark: null,
              },
              icon: {
                __typename: 'Icon',
                id: 'done',
                description: '',
                size: null,
                token: 'done',
                theme: null,
              },
              jumpLink: null,
              items: [
                {
                  __typename: 'PropertyInfoItem',
                  text: 'Climate-controlled air conditioning and heating',
                  state: null,
                  moreInfo: null,
                  icon: null,
                },
                {
                  __typename: 'PropertyInfoItem',
                  text: 'Coffee/tea maker',
                  state: null,
                  moreInfo: null,
                  icon: null,
                },
                {
                  __typename: 'PropertyInfoItem',
                  text: 'Slippers',
                  state: null,
                  moreInfo: null,
                  icon: null,
                },
                {
                  __typename: 'PropertyInfoItem',
                  text: "Children's slippers",
                  state: null,
                  moreInfo: null,
                  icon: null,
                },
                {
                  __typename: 'PropertyInfoItem',
                  text: 'Iron/ironing board (on request)',
                  state: null,
                  moreInfo: null,
                  icon: null,
                },
              ],
            },
            {
              __typename: 'PropertyInfoContent',
              header: {
                __typename: 'LodgingHeader',
                text: 'Sleep well',
                subText: null,
                mark: null,
              },
              icon: {
                __typename: 'Icon',
                id: 'done',
                description: '',
                size: null,
                token: 'done',
                theme: null,
              },
              jumpLink: null,
              items: [
                {
                  __typename: 'PropertyInfoItem',
                  text: 'Hypo-allergenic bedding',
                  state: null,
                  moreInfo: null,
                  icon: null,
                },
                {
                  __typename: 'PropertyInfoItem',
                  text: 'Pillow menu',
                  state: null,
                  moreInfo: null,
                  icon: null,
                },
                {
                  __typename: 'PropertyInfoItem',
                  text: 'Blackout drapes/curtains',
                  state: null,
                  moreInfo: null,
                  icon: null,
                },
                {
                  __typename: 'PropertyInfoItem',
                  text: 'Soundproofed rooms',
                  state: null,
                  moreInfo: null,
                  icon: null,
                },
                {
                  __typename: 'PropertyInfoItem',
                  text: 'Turndown service',
                  state: null,
                  moreInfo: null,
                  icon: null,
                },
                {
                  __typename: 'PropertyInfoItem',
                  text: 'Premium bedding',
                  state: null,
                  moreInfo: null,
                  icon: null,
                },
                {
                  __typename: 'PropertyInfoItem',
                  text: 'Select Comfort mattress',
                  state: null,
                  moreInfo: null,
                  icon: null,
                },
              ],
            },
            {
              __typename: 'PropertyInfoContent',
              header: {
                __typename: 'LodgingHeader',
                text: 'What to enjoy',
                subText: null,
                mark: null,
              },
              icon: {
                __typename: 'Icon',
                id: 'done',
                description: '',
                size: null,
                token: 'done',
                theme: null,
              },
              jumpLink: null,
              items: [
                {
                  __typename: 'PropertyInfoItem',
                  text: 'In-room massage',
                  state: null,
                  moreInfo: null,
                  icon: null,
                },
              ],
            },
            {
              __typename: 'PropertyInfoContent',
              header: {
                __typename: 'LodgingHeader',
                text: 'Freshen up',
                subText: null,
                mark: null,
              },
              icon: {
                __typename: 'Icon',
                id: 'done',
                description: '',
                size: null,
                token: 'done',
                theme: null,
              },
              jumpLink: null,
              items: [
                {
                  __typename: 'PropertyInfoItem',
                  text: 'Rainfall showerhead',
                  state: null,
                  moreInfo: null,
                  icon: null,
                },
                {
                  __typename: 'PropertyInfoItem',
                  text: 'Shower only',
                  state: null,
                  moreInfo: null,
                  icon: null,
                },
                {
                  __typename: 'PropertyInfoItem',
                  text: 'Designer toiletries',
                  state: null,
                  moreInfo: null,
                  icon: null,
                },
                {
                  __typename: 'PropertyInfoItem',
                  text: 'Hair dryer',
                  state: null,
                  moreInfo: null,
                  icon: null,
                },
                {
                  __typename: 'PropertyInfoItem',
                  text: 'Towels',
                  state: null,
                  moreInfo: null,
                  icon: null,
                },
                {
                  __typename: 'PropertyInfoItem',
                  text: 'Toothbrush and toothpaste (on request)',
                  state: null,
                  moreInfo: null,
                  icon: null,
                },
                {
                  __typename: 'PropertyInfoItem',
                  text: 'Toilet paper',
                  state: null,
                  moreInfo: null,
                  icon: null,
                },
              ],
            },
            {
              __typename: 'PropertyInfoContent',
              header: {
                __typename: 'LodgingHeader',
                text: 'Stay connected',
                subText: null,
                mark: null,
              },
              icon: {
                __typename: 'Icon',
                id: 'done',
                description: '',
                size: null,
                token: 'done',
                theme: null,
              },
              jumpLink: null,
              items: [
                {
                  __typename: 'PropertyInfoItem',
                  text: 'Desk',
                  state: null,
                  moreInfo: null,
                  icon: null,
                },
                {
                  __typename: 'PropertyInfoItem',
                  text: 'Free WiFi',
                  state: null,
                  moreInfo: null,
                  icon: null,
                },
                {
                  __typename: 'PropertyInfoItem',
                  text: 'Free local calls',
                  state: null,
                  moreInfo: null,
                  icon: null,
                },
                {
                  __typename: 'PropertyInfoItem',
                  text: 'Electrical adapters/chargers',
                  state: null,
                  moreInfo: null,
                  icon: null,
                },
              ],
            },
            {
              __typename: 'PropertyInfoContent',
              header: {
                __typename: 'LodgingHeader',
                text: 'Food and drink',
                subText: null,
                mark: null,
              },
              icon: {
                __typename: 'Icon',
                id: 'local_dining',
                description: '',
                size: null,
                token: 'local_dining',
                theme: null,
              },
              jumpLink: null,
              items: [
                {
                  __typename: 'PropertyInfoItem',
                  text: 'Kitchen',
                  state: null,
                  moreInfo: null,
                  icon: null,
                },
                {
                  __typename: 'PropertyInfoItem',
                  text: 'Free bottled water',
                  state: null,
                  moreInfo: null,
                  icon: null,
                },
                {
                  __typename: 'PropertyInfoItem',
                  text: 'Highchair',
                  state: null,
                  moreInfo: null,
                  icon: null,
                },
              ],
            },
            {
              __typename: 'PropertyInfoContent',
              header: {
                __typename: 'LodgingHeader',
                text: 'More',
                subText: null,
                mark: null,
              },
              icon: {
                __typename: 'Icon',
                id: 'done',
                description: '',
                size: null,
                token: 'done',
                theme: null,
              },
              jumpLink: null,
              items: [
                {
                  __typename: 'PropertyInfoItem',
                  text: 'Daily housekeeping',
                  state: null,
                  moreInfo: null,
                  icon: null,
                },
                {
                  __typename: 'PropertyInfoItem',
                  text: 'In-room safe (laptop compatible)',
                  state: null,
                  moreInfo: null,
                  icon: null,
                },
              ],
            },
          ],
        },
      ],
      topAmenities: {
        __typename: 'PropertyInfoContent',
        header: {
          __typename: 'LodgingHeader',
          text: 'Property highlights',
          subText: null,
          mark: null,
        },
        icon: null,
        jumpLink: null,
        items: [
          {
            __typename: 'PropertyInfoItem',
            text: 'Parking available',
            state: null,
            moreInfo: null,
            icon: {
              __typename: 'Icon',
              id: 'local_parking',
              description: '',
              size: null,
              token: 'local_parking',
              theme: null,
            },
          },
          {
            __typename: 'PropertyInfoItem',
            text: 'Free WiFi',
            state: null,
            moreInfo: null,
            icon: {
              __typename: 'Icon',
              id: 'wifi',
              description: '',
              size: null,
              token: 'wifi',
              theme: null,
            },
          },
          {
            __typename: 'PropertyInfoItem',
            text: 'Air conditioning',
            state: null,
            moreInfo: null,
            icon: {
              __typename: 'Icon',
              id: 'ac_unit',
              description: '',
              size: null,
              token: 'ac_unit',
              theme: null,
            },
          },
          {
            __typename: 'PropertyInfoItem',
            text: 'Restaurant',
            state: null,
            moreInfo: null,
            icon: {
              __typename: 'Icon',
              id: 'local_dining',
              description: '',
              size: null,
              token: 'local_dining',
              theme: null,
            },
          },
          {
            __typename: 'PropertyInfoItem',
            text: 'Bar',
            state: null,
            moreInfo: null,
            icon: {
              __typename: 'Icon',
              id: 'local_bar',
              description: '',
              size: null,
              token: 'local_bar',
              theme: null,
            },
          },
          {
            __typename: 'PropertyInfoItem',
            text: 'Laundry facilities',
            state: null,
            moreInfo: null,
            icon: {
              __typename: 'Icon',
              id: 'local_laundry_service',
              description: '',
              size: null,
              token: 'local_laundry_service',
              theme: null,
            },
          },
        ],
      },
      propertyContentPreferences: null,
      amenitiesDialog: {
        __typename: 'LodgingAmenitiesDialog',
        trigger: {
          __typename: 'LodgingDialogTriggerMessage',
          value: 'See all',
          icon: {
            __typename: 'Icon',
            id: 'chevron_right',
            description: 'View all amenities',
            size: null,
            token: 'icon__chevron_right',
            theme: null,
          },
          clientSideAnalytics: {
            __typename: 'ClientSideAnalytics',
            linkName: 'View all amenities',
            referrerId: 'HOT.HIS.ViewAllAmenities',
          },
        },
        toolbar: {
          __typename: 'LodgingDialogToolbar',
          title: 'Property amenities',
        },
      },
      takeover: {
        __typename: 'PropertyTakeoverAmenities',
        amenityClosures: null,
        highlight: [
          {
            __typename: 'PropertyInfoContent',
            header: {
              __typename: 'LodgingHeader',
              text: 'Popular amenities',
              subText: null,
              mark: null,
            },
            icon: null,
            jumpLink: null,
            items: [
              {
                __typename: 'PropertyInfoItem',
                text: 'Parking available',
                state: null,
                moreInfo: null,
                icon: {
                  __typename: 'Icon',
                  id: 'local_parking',
                  description: '',
                  size: null,
                  token: 'local_parking',
                  theme: null,
                },
              },
              {
                __typename: 'PropertyInfoItem',
                text: 'Free WiFi',
                state: null,
                moreInfo: null,
                icon: {
                  __typename: 'Icon',
                  id: 'wifi',
                  description: '',
                  size: null,
                  token: 'wifi',
                  theme: null,
                },
              },
              {
                __typename: 'PropertyInfoItem',
                text: 'Air conditioning',
                state: null,
                moreInfo: null,
                icon: {
                  __typename: 'Icon',
                  id: 'ac_unit',
                  description: '',
                  size: null,
                  token: 'ac_unit',
                  theme: null,
                },
              },
              {
                __typename: 'PropertyInfoItem',
                text: 'Restaurant',
                state: null,
                moreInfo: null,
                icon: {
                  __typename: 'Icon',
                  id: 'local_dining',
                  description: '',
                  size: null,
                  token: 'local_dining',
                  theme: null,
                },
              },
              {
                __typename: 'PropertyInfoItem',
                text: 'Bar',
                state: null,
                moreInfo: null,
                icon: {
                  __typename: 'Icon',
                  id: 'local_bar',
                  description: '',
                  size: null,
                  token: 'local_bar',
                  theme: null,
                },
              },
              {
                __typename: 'PropertyInfoItem',
                text: 'Laundry facilities',
                state: null,
                moreInfo: null,
                icon: {
                  __typename: 'Icon',
                  id: 'local_laundry_service',
                  description: '',
                  size: null,
                  token: 'local_laundry_service',
                  theme: null,
                },
              },
            ],
          },
        ],
        property: [
          {
            __typename: 'PropertyInfoContent',
            header: {
              __typename: 'LodgingHeader',
              text: 'Food and drink',
              subText: null,
              mark: null,
            },
            icon: {
              __typename: 'Icon',
              id: 'local_dining',
              description: '',
              size: null,
              token: 'local_dining',
              theme: null,
            },
            jumpLink: null,
            items: [
              {
                __typename: 'PropertyInfoItem',
                text: 'Buffet breakfast (surcharge) each morning 7:00 AM–10:30 AM',
                state: null,
                moreInfo: null,
                icon: null,
              },
              {
                __typename: 'PropertyInfoItem',
                text: 'Restaurant',
                state: null,
                moreInfo: null,
                icon: null,
              },
              {
                __typename: 'PropertyInfoItem',
                text: 'Bar/lounge',
                state: null,
                moreInfo: null,
                icon: null,
              },
              {
                __typename: 'PropertyInfoItem',
                text: 'Coffee/tea in a common area',
                state: null,
                moreInfo: null,
                icon: null,
              },
              {
                __typename: 'PropertyInfoItem',
                text: 'Water dispenser',
                state: null,
                moreInfo: null,
                icon: null,
              },
            ],
          },
          {
            __typename: 'PropertyInfoContent',
            header: {
              __typename: 'LodgingHeader',
              text: 'Working away',
              subText: null,
              mark: null,
            },
            icon: {
              __typename: 'Icon',
              id: 'business_center',
              description: '',
              size: null,
              token: 'business_center',
              theme: null,
            },
            jumpLink: null,
            items: [
              {
                __typename: 'PropertyInfoItem',
                text: 'Conference space',
                state: null,
                moreInfo: null,
                icon: null,
              },
            ],
          },
          {
            __typename: 'PropertyInfoContent',
            header: {
              __typename: 'LodgingHeader',
              text: 'Services',
              subText: null,
              mark: null,
            },
            icon: {
              __typename: 'Icon',
              id: 'room_service',
              description: '',
              size: null,
              token: 'room_service',
              theme: null,
            },
            jumpLink: null,
            items: [
              {
                __typename: 'PropertyInfoItem',
                text: '24-hour front desk',
                state: null,
                moreInfo: null,
                icon: null,
              },
              {
                __typename: 'PropertyInfoItem',
                text: 'Tour/ticket assistance',
                state: null,
                moreInfo: null,
                icon: null,
              },
              {
                __typename: 'PropertyInfoItem',
                text: 'Laundry facilities',
                state: null,
                moreInfo: null,
                icon: null,
              },
              {
                __typename: 'PropertyInfoItem',
                text: 'Luggage storage',
                state: null,
                moreInfo: null,
                icon: null,
              },
              {
                __typename: 'PropertyInfoItem',
                text: 'Wedding services',
                state: null,
                moreInfo: null,
                icon: null,
              },
              {
                __typename: 'PropertyInfoItem',
                text: 'Multilingual staff',
                state: null,
                moreInfo: null,
                icon: null,
              },
            ],
          },
          {
            __typename: 'PropertyInfoContent',
            header: {
              __typename: 'LodgingHeader',
              text: 'Facilities',
              subText: null,
              mark: null,
            },
            icon: {
              __typename: 'Icon',
              id: 'done',
              description: '',
              size: null,
              token: 'done',
              theme: null,
            },
            jumpLink: null,
            items: [
              {
                __typename: 'PropertyInfoItem',
                text: '2 buildings/towers',
                state: null,
                moreInfo: null,
                icon: null,
              },
              {
                __typename: 'PropertyInfoItem',
                text: 'Television in common areas',
                state: null,
                moreInfo: null,
                icon: null,
              },
              {
                __typename: 'PropertyInfoItem',
                text: 'Lockers available',
                state: null,
                moreInfo: null,
                icon: null,
              },
            ],
          },
          {
            __typename: 'PropertyInfoContent',
            header: {
              __typename: 'LodgingHeader',
              text: 'Accessibility',
              subText: null,
              mark: null,
            },
            icon: {
              __typename: 'Icon',
              id: 'accessible',
              description: '',
              size: null,
              token: 'accessible',
              theme: null,
            },
            jumpLink: null,
            items: [
              {
                __typename: 'PropertyInfoItem',
                text: 'Braille/raised signage',
                state: null,
                moreInfo: null,
                icon: null,
              },
              {
                __typename: 'PropertyInfoItem',
                text: 'Elevator',
                state: null,
                moreInfo: null,
                icon: null,
              },
              {
                __typename: 'PropertyInfoItem',
                text: 'Wheelchair-accessible path to elevator',
                state: null,
                moreInfo: null,
                icon: null,
              },
              {
                __typename: 'PropertyInfoItem',
                text: 'Wheelchair-accessible registration desk',
                state: null,
                moreInfo: null,
                icon: null,
              },
              {
                __typename: 'PropertyInfoItem',
                text: 'Wheelchair-accessible business center',
                state: null,
                moreInfo: null,
                icon: null,
              },
              {
                __typename: 'PropertyInfoItem',
                text: 'Handrails in hallways',
                state: null,
                moreInfo: null,
                icon: null,
              },
              {
                __typename: 'PropertyInfoItem',
                text: 'Handrails in stairways',
                state: null,
                moreInfo: null,
                icon: null,
              },
              {
                __typename: 'PropertyInfoItem',
                text: 'Wheelchairs available on site',
                state: null,
                moreInfo: null,
                icon: null,
              },
            ],
          },
        ],
      },
    },
    cleaningAndSafety: null,
    location: {
      __typename: 'PropertyLocation',
      address: {
        __typename: 'PropertyAddress',
        addressLine: 'Kremencova, 164/18, Prague, 110 00',
        city: 'Prague',
        province: '',
        countryCode: 'CZE',
        firstAddressLine: 'Kremencova',
        secondAddressLine: '164/18',
      },
      coordinates: {
        __typename: 'Coordinates',
        latitude: 50.079023,
        longitude: 14.417016,
      },
      multiCityRegion: {
        __typename: 'Region',
        id: '180014',
      },
      whatsAround: {
        __typename: 'PropertyWhatsAround',
        editorial: {
          __typename: 'PropertyEditorial',
          title: 'Prague',
          content: [
            "Located in Prague City Center neighborhood, Hotel CUBE Prague is connected to a rail/subway station. Charles Bridge and Prague National Theatre are local landmarks, and some of the area's attractions include Czech National Museum and LunaPark. Looking to enjoy an event or a game while in town? See what's happening at Municipal House Hall or Czech Lawn Tennis Club. ",
          ],
        },
      },
      mapDialog: {
        __typename: 'LodgingMapDialog',
        trigger: {
          __typename: 'LodgingDialogTriggerMessage',
          value: 'View in a map',
          icon: {
            __typename: 'Icon',
            id: 'chevron_right',
            description: '',
            size: null,
            token: 'icon__chevron_right',
            theme: null,
          },
          clientSideAnalytics: {
            __typename: 'ClientSideAnalytics',
            linkName: 'ClickAddressCTALinkViewMap',
            referrerId: 'HOT.HIS.ClickAddressCTALinkViewMap',
          },
        },
        toolbar: null,
      },
      staticImage: {
        __typename: 'Image',
        description: 'Map',
        url: 'https://maps.googleapis.com/maps/api/staticmap?channel=expedia-HotelInformation&maptype=roadmap&format=jpg&zoom=13&scale=&size=600x120&markers=icon:https://a.travel-assets.com/shopping-pwa/images/his-preview-marker.png%7C50.079023,14.417016&key=AIzaSyCYjQus5kCufOpSj932jFoR_AJiL9yiwOw&signature=qsZGmGAnOByVKo4soOyBaj4kWtg=',
        aspectRatio: null,
      },
    },
    nearbyPOIs: null,
    lodgingChatbot: null,
  },
  propertyGallery: {
    __typename: 'PropertyImageGallery',
    imagesGrouped: null,
    images: [
      {
        __typename: 'PropertyImage',
        accessibilityText: 'Reception, image',
        actionLabel: 'Go to full screen',
        imageId: '543242724',
        image: {
          __typename: 'Image',
          url: 'https://images.trvl-media.com/lodging/67000000/66940000/66933000/66932918/132a4d9e.jpg?impolicy=resizecrop&rw=500&ra=fit',
          description: 'Reception',
        },
      },
      {
        __typename: 'PropertyImage',
        accessibilityText: 'Restaurant, image',
        actionLabel: 'Go to full screen',
        imageId: '674047022',
        image: {
          __typename: 'Image',
          url: 'https://images.trvl-media.com/lodging/67000000/66940000/66933000/66932918/fee3480a.jpg?impolicy=resizecrop&rw=500&ra=fit',
          description: 'Restaurant',
        },
      },
      {
        __typename: 'PropertyImage',
        accessibilityText: 'Front of property, image',
        actionLabel: 'Go to full screen',
        imageId: '578889502',
        image: {
          __typename: 'Image',
          url: 'https://images.trvl-media.com/lodging/67000000/66940000/66933000/66932918/4137ed99.jpg?impolicy=resizecrop&rw=500&ra=fit',
          description: 'Front of property',
        },
      },
      {
        __typename: 'PropertyImage',
        accessibilityText:
          'Premium bedding, Select Comfort beds, in-room safe, desk, image',
        actionLabel: 'Go to full screen',
        imageId: '543252205',
        image: {
          __typename: 'Image',
          url: 'https://images.trvl-media.com/lodging/67000000/66940000/66933000/66932918/e5862001.jpg?impolicy=resizecrop&rw=500&ra=fit',
          description:
            'Premium bedding, Select Comfort beds, in-room safe, desk',
        },
      },
      {
        __typename: 'PropertyImage',
        accessibilityText: 'Restaurant, image',
        actionLabel: 'Go to full screen',
        imageId: '674047015',
        image: {
          __typename: 'Image',
          url: 'https://images.trvl-media.com/lodging/67000000/66940000/66933000/66932918/183cdf4d.jpg?impolicy=resizecrop&rw=500&ra=fit',
          description: 'Restaurant',
        },
      },
      {
        __typename: 'PropertyImage',
        accessibilityText: 'Reception, image',
        actionLabel: 'Go to full screen',
        imageId: '543241408',
        image: {
          __typename: 'Image',
          url: 'https://images.trvl-media.com/lodging/67000000/66940000/66933000/66932918/62463609.jpg?impolicy=resizecrop&rw=500&ra=fit',
          description: 'Reception',
        },
      },
      {
        __typename: 'PropertyImage',
        accessibilityText:
          'Shower, rainfall showerhead, designer toiletries, hair dryer, image',
        actionLabel: 'Go to full screen',
        imageId: '543245091',
        image: {
          __typename: 'Image',
          url: 'https://images.trvl-media.com/lodging/67000000/66940000/66933000/66932918/ab7d7e9e.jpg?impolicy=resizecrop&rw=500&ra=fit',
          description:
            'Shower, rainfall showerhead, designer toiletries, hair dryer',
        },
      },
      {
        __typename: 'PropertyImage',
        accessibilityText: 'Self parking (EUR 30 per day), image',
        actionLabel: 'Go to full screen',
        imageId: '674047025',
        image: {
          __typename: 'Image',
          url: 'https://images.trvl-media.com/lodging/67000000/66940000/66933000/66932918/9d576197.jpg?impolicy=resizecrop&rw=500&ra=fit',
          description: 'Self parking (EUR 30 per day)',
        },
      },
      {
        __typename: 'PropertyImage',
        accessibilityText: 'Lobby sitting area, image',
        actionLabel: 'Go to full screen',
        imageId: '543241242',
        image: {
          __typename: 'Image',
          url: 'https://images.trvl-media.com/lodging/67000000/66940000/66933000/66932918/23e26ba8.jpg?impolicy=resizecrop&rw=500&ra=fit',
          description: 'Lobby sitting area',
        },
      },
      {
        __typename: 'PropertyImage',
        accessibilityText:
          'Superior Room, Patio | Premium bedding, Select Comfort beds, in-room safe, desk, image',
        actionLabel: 'Go to full screen',
        imageId: '543249078',
        image: {
          __typename: 'Image',
          url: 'https://images.trvl-media.com/lodging/67000000/66940000/66933000/66932918/812d518d.jpg?impolicy=resizecrop&rw=500&ra=fit',
          description:
            'Superior Room, Patio | Premium bedding, Select Comfort beds, in-room safe, desk',
        },
      },
      {
        __typename: 'PropertyImage',
        accessibilityText:
          'Superior Room | Premium bedding, Select Comfort beds, in-room safe, desk, image',
        actionLabel: 'Go to full screen',
        imageId: '543249418',
        image: {
          __typename: 'Image',
          url: 'https://images.trvl-media.com/lodging/67000000/66940000/66933000/66932918/fcc5e678.jpg?impolicy=resizecrop&rw=500&ra=fit',
          description:
            'Superior Room | Premium bedding, Select Comfort beds, in-room safe, desk',
        },
      },
      {
        __typename: 'PropertyImage',
        accessibilityText: 'Restaurant, image',
        actionLabel: 'Go to full screen',
        imageId: '674047023',
        image: {
          __typename: 'Image',
          url: 'https://images.trvl-media.com/lodging/67000000/66940000/66933000/66932918/e0ab91d3.jpg?impolicy=resizecrop&rw=500&ra=fit',
          description: 'Restaurant',
        },
      },
      {
        __typename: 'PropertyImage',
        accessibilityText: 'Daily buffet breakfast (EUR 15 per person), image',
        actionLabel: 'Go to full screen',
        imageId: '579804882',
        image: {
          __typename: 'Image',
          url: 'https://images.trvl-media.com/lodging/67000000/66940000/66933000/66932918/81c0b6df.jpg?impolicy=resizecrop&rw=500&ra=fit',
          description: 'Daily buffet breakfast (EUR 15 per person)',
        },
      },
      {
        __typename: 'PropertyImage',
        accessibilityText: 'Daily buffet breakfast (EUR 15 per person), image',
        actionLabel: 'Go to full screen',
        imageId: '578889071',
        image: {
          __typename: 'Image',
          url: 'https://images.trvl-media.com/lodging/67000000/66940000/66933000/66932918/690d5709.jpg?impolicy=resizecrop&rw=500&ra=fit',
          description: 'Daily buffet breakfast (EUR 15 per person)',
        },
      },
      {
        __typename: 'PropertyImage',
        accessibilityText:
          'Shower, rainfall showerhead, designer toiletries, hair dryer, image',
        actionLabel: 'Go to full screen',
        imageId: '543252811',
        image: {
          __typename: 'Image',
          url: 'https://images.trvl-media.com/lodging/67000000/66940000/66933000/66932918/3be4a8ea.jpg?impolicy=resizecrop&rw=500&ra=fit',
          description:
            'Shower, rainfall showerhead, designer toiletries, hair dryer',
        },
      },
      {
        __typename: 'PropertyImage',
        accessibilityText:
          'Deluxe Apartment, Terrace | Bathroom | Shower, rainfall showerhead, designer toiletries, hair dryer, image',
        actionLabel: 'Go to full screen',
        imageId: '543243996',
        image: {
          __typename: 'Image',
          url: 'https://images.trvl-media.com/lodging/67000000/66940000/66933000/66932918/095f3e7c.jpg?impolicy=resizecrop&rw=500&ra=fit',
          description:
            'Deluxe Apartment, Terrace | Bathroom | Shower, rainfall showerhead, designer toiletries, hair dryer',
        },
      },
      {
        __typename: 'PropertyImage',
        accessibilityText:
          'Shower, rainfall showerhead, designer toiletries, hair dryer, image',
        actionLabel: 'Go to full screen',
        imageId: '543252880',
        image: {
          __typename: 'Image',
          url: 'https://images.trvl-media.com/lodging/67000000/66940000/66933000/66932918/2fffec57.jpg?impolicy=resizecrop&rw=500&ra=fit',
          description:
            'Shower, rainfall showerhead, designer toiletries, hair dryer',
        },
      },
      {
        __typename: 'PropertyImage',
        accessibilityText:
          'Deluxe Apartment, Terrace | Living area | 43-inch flat-screen TV with satellite channels, TV, image',
        actionLabel: 'Go to full screen',
        imageId: '543242567',
        image: {
          __typename: 'Image',
          url: 'https://images.trvl-media.com/lodging/67000000/66940000/66933000/66932918/a4b045a8.jpg?impolicy=resizecrop&rw=500&ra=fit',
          description:
            'Deluxe Apartment, Terrace | Living area | 43-inch flat-screen TV with satellite channels, TV',
        },
      },
      {
        __typename: 'PropertyImage',
        accessibilityText:
          'Deluxe Apartment, Terrace | Living area | 43-inch flat-screen TV with satellite channels, TV, image',
        actionLabel: 'Go to full screen',
        imageId: '543243591',
        image: {
          __typename: 'Image',
          url: 'https://images.trvl-media.com/lodging/67000000/66940000/66933000/66932918/52878d44.jpg?impolicy=resizecrop&rw=500&ra=fit',
          description:
            'Deluxe Apartment, Terrace | Living area | 43-inch flat-screen TV with satellite channels, TV',
        },
      },
      {
        __typename: 'PropertyImage',
        accessibilityText: 'Deluxe Apartment, Terrace | View from room, image',
        actionLabel: 'Go to full screen',
        imageId: '578888829',
        image: {
          __typename: 'Image',
          url: 'https://images.trvl-media.com/lodging/67000000/66940000/66933000/66932918/6321000c.jpg?impolicy=resizecrop&rw=500&ra=fit',
          description: 'Deluxe Apartment, Terrace | View from room',
        },
      },
      {
        __typename: 'PropertyImage',
        accessibilityText:
          'Duplex | Living area | 43-inch flat-screen TV with satellite channels, TV, image',
        actionLabel: 'Go to full screen',
        imageId: '543244965',
        image: {
          __typename: 'Image',
          url: 'https://images.trvl-media.com/lodging/67000000/66940000/66933000/66932918/e86d686f.jpg?impolicy=resizecrop&rw=500&ra=fit',
          description:
            'Duplex | Living area | 43-inch flat-screen TV with satellite channels, TV',
        },
      },
      {
        __typename: 'PropertyImage',
        accessibilityText:
          '43-inch flat-screen TV with satellite channels, TV, image',
        actionLabel: 'Go to full screen',
        imageId: '543241787',
        image: {
          __typename: 'Image',
          url: 'https://images.trvl-media.com/lodging/67000000/66940000/66933000/66932918/cc92df4d.jpg?impolicy=resizecrop&rw=500&ra=fit',
          description: '43-inch flat-screen TV with satellite channels, TV',
        },
      },
      {
        __typename: 'PropertyImage',
        accessibilityText:
          '43-inch flat-screen TV with satellite channels, TV, image',
        actionLabel: 'Go to full screen',
        imageId: '674047024',
        image: {
          __typename: 'Image',
          url: 'https://images.trvl-media.com/lodging/67000000/66940000/66933000/66932918/72fb46c5.jpg?impolicy=resizecrop&rw=500&ra=fit',
          description: '43-inch flat-screen TV with satellite channels, TV',
        },
      },
      {
        __typename: 'PropertyImage',
        accessibilityText: 'Hallway, image',
        actionLabel: 'Go to full screen',
        imageId: '543242638',
        image: {
          __typename: 'Image',
          url: 'https://images.trvl-media.com/lodging/67000000/66940000/66933000/66932918/249f1087.jpg?impolicy=resizecrop&rw=500&ra=fit',
          description: 'Hallway',
        },
      },
      {
        __typename: 'PropertyImage',
        accessibilityText:
          'Premium bedding, Select Comfort beds, in-room safe, desk, image',
        actionLabel: 'Go to full screen',
        imageId: '674047020',
        image: {
          __typename: 'Image',
          url: 'https://images.trvl-media.com/lodging/67000000/66940000/66933000/66932918/0b9672c7.jpg?impolicy=resizecrop&rw=500&ra=fit',
          description:
            'Premium bedding, Select Comfort beds, in-room safe, desk',
        },
      },
      {
        __typename: 'PropertyImage',
        accessibilityText:
          '43-inch flat-screen TV with satellite channels, TV, image',
        actionLabel: 'Go to full screen',
        imageId: '543252060',
        image: {
          __typename: 'Image',
          url: 'https://images.trvl-media.com/lodging/67000000/66940000/66933000/66932918/c1674e65.jpg?impolicy=resizecrop&rw=500&ra=fit',
          description: '43-inch flat-screen TV with satellite channels, TV',
        },
      },
      {
        __typename: 'PropertyImage',
        accessibilityText:
          'Duplex | Premium bedding, Select Comfort beds, in-room safe, desk, image',
        actionLabel: 'Go to full screen',
        imageId: '543248707',
        image: {
          __typename: 'Image',
          url: 'https://images.trvl-media.com/lodging/67000000/66940000/66933000/66932918/4b0ad828.jpg?impolicy=resizecrop&rw=500&ra=fit',
          description:
            'Duplex | Premium bedding, Select Comfort beds, in-room safe, desk',
        },
      },
      {
        __typename: 'PropertyImage',
        accessibilityText:
          'Duplex | Premium bedding, Select Comfort beds, in-room safe, desk, image',
        actionLabel: 'Go to full screen',
        imageId: '543245450',
        image: {
          __typename: 'Image',
          url: 'https://images.trvl-media.com/lodging/67000000/66940000/66933000/66932918/8e2b156e.jpg?impolicy=resizecrop&rw=500&ra=fit',
          description:
            'Duplex | Premium bedding, Select Comfort beds, in-room safe, desk',
        },
      },
      {
        __typename: 'PropertyImage',
        accessibilityText: 'Exterior, image',
        actionLabel: 'Go to full screen',
        imageId: '674047021',
        image: {
          __typename: 'Image',
          url: 'https://images.trvl-media.com/lodging/67000000/66940000/66933000/66932918/8f691c48.jpg?impolicy=resizecrop&rw=500&ra=fit',
          description: 'Exterior',
        },
      },
      {
        __typename: 'PropertyImage',
        accessibilityText: 'Interior, image',
        actionLabel: 'Go to full screen',
        imageId: '543241111',
        image: {
          __typename: 'Image',
          url: 'https://images.trvl-media.com/lodging/67000000/66940000/66933000/66932918/8c4afbfe.jpg?impolicy=resizecrop&rw=500&ra=fit',
          description: 'Interior',
        },
      },
      {
        __typename: 'PropertyImage',
        accessibilityText: 'Restaurant, image',
        actionLabel: 'Go to full screen',
        imageId: '674047019',
        image: {
          __typename: 'Image',
          url: 'https://images.trvl-media.com/lodging/67000000/66940000/66933000/66932918/8215c7fe.jpg?impolicy=resizecrop&rw=500&ra=fit',
          description: 'Restaurant',
        },
      },
      {
        __typename: 'PropertyImage',
        accessibilityText: 'Meeting facility, image',
        actionLabel: 'Go to full screen',
        imageId: '543242912',
        image: {
          __typename: 'Image',
          url: 'https://images.trvl-media.com/lodging/67000000/66940000/66933000/66932918/57975695.jpg?impolicy=resizecrop&rw=500&ra=fit',
          description: 'Meeting facility',
        },
      },
      {
        __typename: 'PropertyImage',
        accessibilityText:
          'Shower, rainfall showerhead, designer toiletries, hair dryer, image',
        actionLabel: 'Go to full screen',
        imageId: '543250880',
        image: {
          __typename: 'Image',
          url: 'https://images.trvl-media.com/lodging/67000000/66940000/66933000/66932918/21855f01.jpg?impolicy=resizecrop&rw=500&ra=fit',
          description:
            'Shower, rainfall showerhead, designer toiletries, hair dryer',
        },
      },
      {
        __typename: 'PropertyImage',
        accessibilityText: 'Balcony, image',
        actionLabel: 'Go to full screen',
        imageId: '674047013',
        image: {
          __typename: 'Image',
          url: 'https://images.trvl-media.com/lodging/67000000/66940000/66933000/66932918/6e9fcd97.jpg?impolicy=resizecrop&rw=500&ra=fit',
          description: 'Balcony',
        },
      },
      {
        __typename: 'PropertyImage',
        accessibilityText: 'Restaurant, image',
        actionLabel: 'Go to full screen',
        imageId: '674047017',
        image: {
          __typename: 'Image',
          url: 'https://images.trvl-media.com/lodging/67000000/66940000/66933000/66932918/a6b4e9e6.jpg?impolicy=resizecrop&rw=500&ra=fit',
          description: 'Restaurant',
        },
      },
      {
        __typename: 'PropertyImage',
        accessibilityText: ', image',
        actionLabel: 'Go to full screen',
        imageId: '674047014',
        image: {
          __typename: 'Image',
          url: 'https://images.trvl-media.com/lodging/67000000/66940000/66933000/66932918/590f3553.jpg?impolicy=resizecrop&rw=500&ra=fit',
          description: '',
        },
      },
    ],
    accessibilityLabel: 'Photo gallery for Hotel CUBE Prague',
    thumbnailGalleryDialog: {
      __typename: 'LodgingGalleryDialog',
      trigger: {
        __typename: 'LodgingDialogTriggerMessage',
        value: '35+',
        icon: {
          __typename: 'Icon',
          id: 'photo_library',
          description: '',
          size: null,
          token: 'icon__photo_library',
          theme: null,
        },
        clientSideAnalytics: {
          __typename: 'ClientSideAnalytics',
          linkName: 'Close Thumbnail Gallery Dialog via Cross button',
          referrerId: 'App.HOT.HIS.PhotoGalleryTrigger.Close',
        },
      },
      toolbar: {
        __typename: 'LodgingDialogToolbar',
        title: 'Hotel CUBE Prague',
        icon: {
          __typename: 'Icon',
          id: 'arrow_back',
          description: 'Cancel, go back to property details',
          size: null,
          token: 'icon__arrow_back',
          theme: null,
        },
        clientSideAnalytics: null,
      },
    },
    mediaGalleryDialog: {
      __typename: 'LodgingGalleryDialog',
      trigger: {
        __typename: 'LodgingDialogTriggerMessage',
        value: '35+',
        icon: null,
        clientSideAnalytics: null,
      },
      toolbar: {
        __typename: 'LodgingDialogToolbar',
        title: 'Hotel CUBE Prague',
        icon: {
          __typename: 'Icon',
          id: 'close',
          description: 'Cancel, go back to property details',
          size: null,
          token: 'icon__close',
          theme: null,
        },
        clientSideAnalytics: null,
      },
    },
  },
  reviewInfo: {
    __typename: 'PropertyReviews',
    summary: {
      __typename: 'PropertyReviewSummary',
      overallScoreWithDescriptionA11y: {
        __typename: 'LodgingEnrichedMessage',
        value: '9.8/10 Exceptional',
      },
      propertyReviewCountDetails: {
        __typename: 'PropertyReviewCountDetails',
        shortDescription: 'See all 75 reviews',
      },
      highlightMessage: null,
      seeAllAction: {
        __typename: 'PropertyFilteredReviewsDialog',
        trigger: {
          __typename: 'LodgingDialogTriggerMessage',
          clientSideAnalytics: {
            __typename: 'ClientSideAnalytics',
            linkName: 'Open property reviews dialog',
            referrerId: 'PropertyReviews.Open',
          },
        },
      },
    },
  },
  propertyContentSectionGroups: {
    __typename: 'PropertyContentSectionGroups',
    cleanliness: {
      __typename: 'PropertyContentSectionGroup',
      sectionName: 'cleaningAndSafetyPractices',
      sections: [
        {
          __typename: 'PropertyContentSection',
          sectionName: 'cleaningAndSafetyPractices',
          header: {
            __typename: 'LodgingHeader',
            icon: null,
            text: 'Cleaning and safety practices',
            subText: null,
          },
          bodySubSections: [
            {
              __typename: 'PropertyContentSubSection',
              elements: [
                {
                  __typename: 'PropertyContent',
                  header: {
                    __typename: 'LodgingHeader',
                    text: 'Enhanced cleanliness measures',
                    subText: null,
                    icon: {
                      __typename: 'Icon',
                      id: 'cleanliness',
                      description: '',
                      size: null,
                      token: 'icon__cleanliness',
                      theme: null,
                    },
                    headerImage: null,
                  },
                  items: [
                    {
                      __typename: 'PropertyContentItemTexts',
                      contents: [
                        {
                          __typename: 'PropertyContentText',
                          primary: {
                            __typename: 'LodgingEnrichedMessage',
                            value: 'Disinfectant is used to clean the property',
                            accessibilityLabel: null,
                            icon: null,
                          },
                          secondary: null,
                        },
                        {
                          __typename: 'PropertyContentText',
                          primary: {
                            __typename: 'LodgingEnrichedMessage',
                            value:
                              'Sheets and towels are washed at 60°C/140°F or hotter',
                            accessibilityLabel: null,
                            icon: null,
                          },
                          secondary: null,
                        },
                      ],
                    },
                  ],
                },
              ],
              expando: null,
              maxColumns: 1,
            },
            {
              __typename: 'PropertyContentSubSection',
              elements: [
                {
                  __typename: 'PropertyContent',
                  header: {
                    __typename: 'LodgingHeader',
                    text: 'Safety measures',
                    subText: null,
                    icon: {
                      __typename: 'Icon',
                      id: 'done',
                      description: '',
                      size: null,
                      token: 'icon__done',
                      theme: null,
                    },
                    headerImage: null,
                  },
                  items: [
                    {
                      __typename: 'PropertyContentItemTexts',
                      contents: [
                        {
                          __typename: 'PropertyContentText',
                          primary: {
                            __typename: 'LodgingEnrichedMessage',
                            value:
                              'Personal protective equipment worn by staff',
                            accessibilityLabel: null,
                            icon: null,
                          },
                          secondary: null,
                        },
                        {
                          __typename: 'PropertyContentText',
                          primary: {
                            __typename: 'LodgingEnrichedMessage',
                            value: 'Hand sanitizer provided',
                            accessibilityLabel: null,
                            icon: null,
                          },
                          secondary: null,
                        },
                        {
                          __typename: 'PropertyContentText',
                          primary: {
                            __typename: 'LodgingEnrichedMessage',
                            value:
                              'At check-in, guests must provide a record of full COVID-19 vaccination',
                            accessibilityLabel: null,
                            icon: null,
                          },
                          secondary: null,
                        },
                      ],
                    },
                  ],
                },
              ],
              expando: null,
              maxColumns: 1,
            },
            {
              __typename: 'PropertyContentSubSection',
              elements: [
                {
                  __typename: 'PropertyContent',
                  header: {
                    __typename: 'LodgingHeader',
                    text: null,
                    subText: null,
                    icon: null,
                    headerImage: null,
                  },
                  items: [
                    {
                      __typename: 'PropertyContentItemText',
                      content: {
                        __typename: 'PropertyContentText',
                        primary: {
                          __typename: 'LodgingEnrichedMessage',
                          value:
                            'This information is provided by our partners.',
                          accessibilityLabel: null,
                          icon: null,
                        },
                        secondary: null,
                      },
                    },
                  ],
                },
              ],
              expando: null,
              maxColumns: 1,
            },
          ],
          action: null,
        },
      ],
    },
    aboutThisProperty: {
      __typename: 'PropertyContentSectionGroup',
      sectionName: null,
      sections: [
        {
          __typename: 'PropertyContentSection',
          sectionName: null,
          header: {
            __typename: 'LodgingHeader',
            icon: null,
            text: 'About this property',
            subText: null,
          },
          bodySubSections: [
            {
              __typename: 'PropertyContentSubSection',
              elements: [
                {
                  __typename: 'PropertyContent',
                  header: {
                    __typename: 'LodgingHeader',
                    text: 'Hotel CUBE Prague',
                    subText: null,
                    icon: null,
                    headerImage: null,
                  },
                  items: [
                    {
                      __typename: 'PropertyContentItemMarkup',
                      content: {
                        __typename: 'MarkupText',
                        text: 'Putting you in a great location within a 15-minute walk of Old Town Square and Wenceslas Square, Hotel CUBE Prague offers an airport shuttle (available 24 hours) for EUR 28 per vehicle one-way. You can relax with a drink at the bar/lounge, and the restaurant is the perfect spot to grab a bite to eat. Also, this hotel is 0.4 mi (0.6 km) from Dancing House and 0.7 mi (1.1 km) from Prague Astronomical Clock. Fellow travelers say great things about the breakfast. Public transportation is just a short walk: Myslíkova Stop is 2 minutes and Novoměstská radnice Stop is 4 minutes.   ',
                        markupType: 'HTML',
                      },
                    },
                  ],
                },
              ],
              expando: null,
              maxColumns: 1,
            },
            {
              __typename: 'PropertyContentSubSection',
              elements: [
                {
                  __typename: 'PropertyContent',
                  header: {
                    __typename: 'LodgingHeader',
                    text: 'Languages',
                    subText: null,
                    icon: null,
                    headerImage: null,
                  },
                  items: [
                    {
                      __typename: 'PropertyContentItemText',
                      content: {
                        __typename: 'PropertyContentText',
                        primary: {
                          __typename: 'LodgingEnrichedMessage',
                          value: 'Czech, English, German, Slovak',
                          accessibilityLabel: null,
                          icon: null,
                        },
                        secondary: null,
                      },
                    },
                  ],
                },
              ],
              expando: null,
              maxColumns: 1,
            },
          ],
          action: null,
        },
        {
          __typename: 'PropertyContentSection',
          sectionName: 'cleaningAndSafetyPractices',
          header: {
            __typename: 'LodgingHeader',
            icon: null,
            text: 'Cleaning and safety practices',
            subText: null,
          },
          bodySubSections: [
            {
              __typename: 'PropertyContentSubSection',
              elements: [
                {
                  __typename: 'PropertyContent',
                  header: {
                    __typename: 'LodgingHeader',
                    text: 'Enhanced cleanliness measures',
                    subText: null,
                    icon: {
                      __typename: 'Icon',
                      id: 'cleanliness',
                      description: '',
                      size: null,
                      token: 'icon__cleanliness',
                      theme: null,
                    },
                    headerImage: null,
                  },
                  items: [
                    {
                      __typename: 'PropertyContentItemTexts',
                      contents: [
                        {
                          __typename: 'PropertyContentText',
                          primary: {
                            __typename: 'LodgingEnrichedMessage',
                            value: 'Disinfectant is used to clean the property',
                            accessibilityLabel: null,
                            icon: null,
                          },
                          secondary: null,
                        },
                        {
                          __typename: 'PropertyContentText',
                          primary: {
                            __typename: 'LodgingEnrichedMessage',
                            value:
                              'Sheets and towels are washed at 60°C/140°F or hotter',
                            accessibilityLabel: null,
                            icon: null,
                          },
                          secondary: null,
                        },
                      ],
                    },
                  ],
                },
              ],
              expando: null,
              maxColumns: 1,
            },
            {
              __typename: 'PropertyContentSubSection',
              elements: [
                {
                  __typename: 'PropertyContent',
                  header: {
                    __typename: 'LodgingHeader',
                    text: 'Safety measures',
                    subText: null,
                    icon: {
                      __typename: 'Icon',
                      id: 'done',
                      description: '',
                      size: null,
                      token: 'icon__done',
                      theme: null,
                    },
                    headerImage: null,
                  },
                  items: [
                    {
                      __typename: 'PropertyContentItemTexts',
                      contents: [
                        {
                          __typename: 'PropertyContentText',
                          primary: {
                            __typename: 'LodgingEnrichedMessage',
                            value:
                              'Personal protective equipment worn by staff',
                            accessibilityLabel: null,
                            icon: null,
                          },
                          secondary: null,
                        },
                        {
                          __typename: 'PropertyContentText',
                          primary: {
                            __typename: 'LodgingEnrichedMessage',
                            value: 'Hand sanitizer provided',
                            accessibilityLabel: null,
                            icon: null,
                          },
                          secondary: null,
                        },
                        {
                          __typename: 'PropertyContentText',
                          primary: {
                            __typename: 'LodgingEnrichedMessage',
                            value:
                              'At check-in, guests must provide a record of full COVID-19 vaccination',
                            accessibilityLabel: null,
                            icon: null,
                          },
                          secondary: null,
                        },
                      ],
                    },
                  ],
                },
              ],
              expando: null,
              maxColumns: 1,
            },
            {
              __typename: 'PropertyContentSubSection',
              elements: [
                {
                  __typename: 'PropertyContent',
                  header: {
                    __typename: 'LodgingHeader',
                    text: null,
                    subText: null,
                    icon: null,
                    headerImage: null,
                  },
                  items: [
                    {
                      __typename: 'PropertyContentItemText',
                      content: {
                        __typename: 'PropertyContentText',
                        primary: {
                          __typename: 'LodgingEnrichedMessage',
                          value:
                            'This information is provided by our partners.',
                          accessibilityLabel: null,
                          icon: null,
                        },
                        secondary: null,
                      },
                    },
                  ],
                },
              ],
              expando: null,
              maxColumns: 1,
            },
          ],
          action: null,
        },
      ],
    },
    policies: {
      __typename: 'PropertyContentSectionGroup',
      sectionName: null,
      sections: [
        {
          __typename: 'PropertyContentSection',
          sectionName: 'Fees & policies',
          header: {
            __typename: 'LodgingHeader',
            icon: null,
            text: 'Fees & policies',
            subText: null,
          },
          bodySubSections: [
            {
              __typename: 'PropertyContentSubSection',
              elements: [
                {
                  __typename: 'PropertyContent',
                  header: {
                    __typename: 'LodgingHeader',
                    text: 'Mandatory fees',
                    subText: null,
                    icon: null,
                    headerImage: null,
                  },
                  items: [
                    {
                      __typename: 'PropertyContentItemMarkup',
                      content: {
                        __typename: 'MarkupText',
                        text: "You'll be asked to pay the following charges by the property at check-in or check-out: <br/>",
                        markupType: 'HTML',
                      },
                    },
                    {
                      __typename: 'PropertyContentItemMarkup',
                      content: {
                        __typename: 'MarkupText',
                        text: '<ul><li><strong>A tax</strong> is imposed by the city: EUR 2.11 per person, per night, up to 60 nights </li></ul>',
                        markupType: 'HTML',
                      },
                    },
                  ],
                },
              ],
              expando: null,
              maxColumns: 1,
            },
            {
              __typename: 'PropertyContentSubSection',
              elements: [
                {
                  __typename: 'PropertyContent',
                  header: {
                    __typename: 'LodgingHeader',
                    text: 'Optional extras',
                    subText: null,
                    icon: null,
                    headerImage: null,
                  },
                  items: [
                    {
                      __typename: 'PropertyContentItemMarkup',
                      content: {
                        __typename: 'MarkupText',
                        text: '<ul><li><strong>Buffet breakfast</strong> is offered for an extra charge of approximately EUR 15 per person</li><li><strong>Airport shuttle</strong> service is offered for an extra charge of EUR 28 per vehicle (one-way, maximum occupancy 4)</li> </ul>',
                        markupType: 'HTML',
                      },
                    },
                  ],
                },
              ],
              expando: null,
              maxColumns: 1,
            },
            {
              __typename: 'PropertyContentSubSection',
              elements: [
                {
                  __typename: 'PropertyContent',
                  header: {
                    __typename: 'LodgingHeader',
                    text: 'Parking',
                    subText: null,
                    icon: null,
                    headerImage: null,
                  },
                  items: [
                    {
                      __typename: 'PropertyContentItemMarkup',
                      content: {
                        __typename: 'MarkupText',
                        text: '<ul><li>Covered self parking costs EUR 30 per day with in/out privileges</li><li>Parking height restrictions apply </li></ul>',
                        markupType: 'HTML',
                      },
                    },
                  ],
                },
              ],
              expando: null,
              maxColumns: 1,
            },
            {
              __typename: 'PropertyContentSubSection',
              elements: [
                {
                  __typename: 'PropertyContent',
                  header: {
                    __typename: 'LodgingHeader',
                    text: 'Hygiene & cleanliness',
                    subText: null,
                    icon: null,
                    headerImage: null,
                  },
                  items: [
                    {
                      __typename: 'PropertyContentItemMarkup',
                      content: {
                        __typename: 'MarkupText',
                        text: '<p>This property advises that enhanced cleaning and guest safety measures are currently in place.</p><p>Disinfectant is used to clean the property, and bed sheets and towels are laundered at a temperature of at least 60°C/140°F.</p><p>Staff at the property wear personal protective equipment and guests are provided with hand sanitizer.</p><p>At check-in, guests must provide a record of full COVID-19 vaccination.</p>',
                        markupType: 'HTML',
                      },
                    },
                  ],
                },
              ],
              expando: null,
              maxColumns: 1,
            },
            {
              __typename: 'PropertyContentSubSection',
              elements: [
                {
                  __typename: 'PropertyContent',
                  header: {
                    __typename: 'LodgingHeader',
                    text: 'Policies',
                    subText: null,
                    icon: null,
                    headerImage: null,
                  },
                  items: [
                    {
                      __typename: 'PropertyContentItemTexts',
                      contents: [
                        {
                          __typename: 'PropertyContentText',
                          primary: {
                            __typename: 'LodgingEnrichedMessage',
                            value:
                              'This property accepts credit cards and cash.',
                            accessibilityLabel: null,
                            icon: null,
                          },
                          secondary: null,
                        },
                      ],
                    },
                  ],
                },
              ],
              expando: null,
              maxColumns: 1,
            },
            {
              __typename: 'PropertyContentSubSection',
              elements: [
                {
                  __typename: 'PropertyContent',
                  header: {
                    __typename: 'LodgingHeader',
                    text: 'Also known as',
                    subText: null,
                    icon: null,
                    headerImage: null,
                  },
                  items: [
                    {
                      __typename: 'PropertyContentItemText',
                      content: {
                        __typename: 'PropertyContentText',
                        primary: {
                          __typename: 'LodgingEnrichedMessage',
                          value: 'Hotel CUBE',
                          accessibilityLabel: null,
                          icon: null,
                        },
                        secondary: null,
                      },
                    },
                    {
                      __typename: 'PropertyContentItemText',
                      content: {
                        __typename: 'PropertyContentText',
                        primary: {
                          __typename: 'LodgingEnrichedMessage',
                          value: 'Hotel CUBE Prague Hotel',
                          accessibilityLabel: null,
                          icon: null,
                        },
                        secondary: null,
                      },
                    },
                    {
                      __typename: 'PropertyContentItemText',
                      content: {
                        __typename: 'PropertyContentText',
                        primary: {
                          __typename: 'LodgingEnrichedMessage',
                          value: 'Hotel CUBE Prague Prague',
                          accessibilityLabel: null,
                          icon: null,
                        },
                        secondary: null,
                      },
                    },
                    {
                      __typename: 'PropertyContentItemText',
                      content: {
                        __typename: 'PropertyContentText',
                        primary: {
                          __typename: 'LodgingEnrichedMessage',
                          value: 'Hotel CUBE Prague Hotel Prague',
                          accessibilityLabel: null,
                          icon: null,
                        },
                        secondary: null,
                      },
                    },
                  ],
                },
              ],
              expando: null,
              maxColumns: 1,
            },
          ],
          action: null,
        },
      ],
    },
    importantInfo: null,
  },
  saveTripItem: null,
};
export default hotel;
