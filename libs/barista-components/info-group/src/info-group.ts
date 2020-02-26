/**
 * @license
 * Copyright 2020 Dynatrace LLC
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {
  ChangeDetectionStrategy,
  Component,
  Directive,
  ViewEncapsulation,
} from '@angular/core';

@Directive({
  selector: `dt-info-group-title, [dt-info-group-title], [dtInfoGroupTitle]`,
  exportAs: 'dtInfoGroupTitle',
  host: {
    class: 'dt-info-group-title',
  },
})
export class DtInfoGroupTitle {}

/** Icon of the info group, needed as it's used as a selector in the API. */
@Directive({
  selector: `dt-info-group-icon, [dt-info-group-icon], [dtInfoGroupIcon]`,
  exportAs: 'dtInfoGroupIcon',
  host: {
    class: 'dt-info-group-icon',
  },
})
export class DtInfoGroupIcon {}

@Component({
  selector: 'dt-info-group',
  exportAs: 'dtInfoGroup',
  templateUrl: 'info-group.html',
  styleUrls: ['info-group.scss'],
  host: {
    class: 'dt-info-group',
  },
  preserveWhitespaces: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.Emulated,
})
export class DtInfoGroup {}