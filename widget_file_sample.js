window._genesys = {
  widgets: {
    webchat: {
      transport: {
        type: 'purecloud-v2-sockets',
        dataURL: 'https://api.usw2.pure.cloud',     // replace with API URL matching your region
        deploymentKey: '958da292-59c7-45d5-90eb-225e8a6f67e1',  // replace with your Deployment ID
        orgGuid: 'b3f75087-97e7-48d7-ba65-ad4165875234',              // replace with your Organization ID
        interactionData: {
          routing: {
            targetType: 'QUEUE',
            targetAddress: 'CTRMA Demo Queue',
            priority: 2
          }
        }
      },
      userData: {
        //addressStreet: '64472 Brown Street',
        //addressCity: 'Lindgrenmouth',
        //addressPostalCode: '50163-2735',
        //addressState: 'FL',
        //phoneNumber: '',
        //phoneType: 'Cell',
        //customerId: '59606',
        // These fields should be provided via advanced configuration
        // firstName: 'Praenomen',
        // lastName: 'Gens',
        // email: 'praenomen.gens@calidumlitterae.com',
        // subject: 'Chat subject'
      },
      form: {
        wrapper: "<table></table>",
        inputs: [
          {
            id: 'cx_webchat_form_firstname',
            name: 'firstname',
            maxlength: '100',
            placeholder: 'Required',
            label: 'First Name',
            value: ''   // This value can be result of a function
          },
          {
            id: 'cx_webchat_form_lastname',
            name: 'lastname',
            maxlength: '100',
            placeholder: 'Required',
            label: 'Last Name',
            value: ''   // This value can be result of a function
          },
          {
            id: 'cx_webchat_form_email',
            name: 'email',
            maxlength: '100',
            placeholder: 'Optional',
            label: 'Email',
            value: ''   // This value can be result of a function
          },
          {
            id: 'cx_webchat_form_subject',
            name: 'subject',
            maxlength: '100',
            placeholder: 'Optional',
            label: 'Subject',
            value: ''   // This value can be result of a function
          },
          {
            id: 'cx_webchat_form_mobileno',
            name: 'mobileno',
            maxlength: '100',
            placeholder: 'Required',
            label: 'Mobile No',
            value: ''   // This value can be result of a function
          },
        ]
      }
    }
  }
};