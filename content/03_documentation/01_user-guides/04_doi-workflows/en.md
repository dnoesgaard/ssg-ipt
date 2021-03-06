---
title: DOI workflow
drawer: true
category: Documentation
subCategory: User guides
---

# IPT DOI Workflows

<p class="comment-warning">NB: This page has not been revised</p>
 
## Introduction

Since IPT v2.2, the IPT can be configured to use a DataCite or EZID account to manage DOIs for datasets. Publishers have the option of assigning new DOIs to a dataset, or letting the IPT manage an existing DOI for a dataset. A description of these two workflows follows.

## Workflows

### Assigning new DOIs to a Dataset

Ideally publishers assign a new DOI to a dataset each time it undergoes a scientifically significant change. This differentiates major versions from each other, and allows them to be uniquely cited.

The first step in assigning a DOI to a dataset, is reserving a DOI.  A publisher may reserve a DOI for a dataset after the mandatory metadata has been entered. The advantage of a reserved DOI is that it can be included in a manuscript prior to a dataset's official release.

The DOI will get registered the next time the resource is published, provided the resource is publicly available. This results in a major version change.

Until the reserved DOI gets registered it can still be deleted. A graphical representation of this workflow is below:

<img src='https://github.com/gbif/ipt/wiki/gbif-ipt-docs/ipt2/v22/AssignNewDOI.png' />

### Letting the IPT manage an existing DOI for a Dataset

If a dataset has already been assigned a DOI, publishers have the option of letting the IPT manage the existing DOI for them. This facilitates updating the DOI metadata, since the IPT automatically updates the DOI metadata every time the dataset is (re)published.

_For this to work with existing 'registered' DOIs, you must ensure that the DOI's target URI matches the dataset's homepage URI, and that the dataset is publicly accessible (since an existing DOI must resolve to a publicly accessible page)._

To assign an existing DOI to a dataset, publishers must set the DOI as the citation identifier (in resource metadata). After the mandatory metadata has been entered, the publisher may reserve a DOI. Since the existing DOI has been entered, however, the IPT reuses that instead of minting a new DOI. Of course the IPT's DOI-assigning account must have the rights to manage this DOI, otherwise an error message will appear.

_If the existing DOI was only reserved, it will be deleted if you try to delete it. If the existing DOI was registered, it will not be deleted if you try to delete it._

The DOI will get updated the next time the resource is published, provided the resource is publicly available. This results in a major version change.

A graphical representation of this workflow is below:

<img src='https://github.com/gbif/ipt/wiki/gbif-ipt-docs/ipt2/v22/AssignExistingDOI.png' />