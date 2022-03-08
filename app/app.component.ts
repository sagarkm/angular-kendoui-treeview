import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <kendo-treeview
        [nodes]="treeNodes"
        textField="desc"

        kendoTreeViewExpandable

        kendoTreeViewFlatDataBinding
        idField="id"
        parentIdField="parentId">
    </kendo-treeview>
  `,
})
export class AppComponent {
  public treeNodes: any[] = [
    {
      id: 1,
      desc: 'Europe',
    },
    {
      id: 2,
      desc: 'Asia',
    },
    {
      id: 3,
      parentId: 2,
      desc: 'India',
    },
    {
      id: 4,
      parentId: 1,
      desc: 'Italy',
    },
    {
      id: 4,
      parentId: 3,
      desc: 'Mumbai',
    },
  ];
}
