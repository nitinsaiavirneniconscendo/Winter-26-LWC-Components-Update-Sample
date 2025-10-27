import { LightningElement } from 'lwc';
export default class WinterChangesGallery extends LightningElement {
data = [
        { id: '001', name: 'Acme Corp', industry: 'Tech', revenue: 1200000 },
        { id: '002', name: 'Blue Ocean', industry: 'Finance', revenue: 980000 },
        { id: '003', name: 'Sunrise Foods', industry: 'Retail', revenue: 430000 }
    ];

    columns = [
        { label: 'Name', fieldName: 'name', highlightClass: 'slds-theme_alert-texture' },
        { label: 'Industry', fieldName: 'industry' },
        { label: 'Revenue', fieldName: 'revenue', type: 'currency' }
    ];

    disabledRows = ['002'];

    options = [
        { label: 'Apple', value: 'apple' },
        { label: 'Banana', value: 'banana' },
        { label: 'Cherry', value: 'cherry' }
    ];
    value = ['apple'];

    checkboxValue = true;

    // Tree grid demo
    treeColumns = [
        { label: 'Name', fieldName: 'name' },
        { label: 'Category', fieldName: 'category' }
    ];

    treeData = [
        {
            id: '1', name: 'Fruits', category: 'Food', _children: [
                { id: '1-1', name: 'Apple', category: 'Fruit' },
                { id: '1-2', name: 'Banana', category: 'Fruit' }
            ]
        }
    ];

    disabledRowsTree = ['1-2'];
}