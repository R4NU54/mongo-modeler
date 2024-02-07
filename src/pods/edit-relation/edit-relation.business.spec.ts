import { mapTableListToDropdownVm } from './edit-relation.business';
import { DropdownOptionVm } from '@/common/components';
import { DatabaseSchemaVm } from '@/core/providers/canvas-schema';

describe('mapTableListToDropdownVm', () => {
  it('should map table list to dropdown vm', () => {
    // Arrange
    const canvasSchema: DatabaseSchemaVm = {
      tables: [
        { id: '1', tableName: 'Table 1', x: 0, y: 0, fields: [] },
        { id: '2', tableName: 'Table 2', x: 0, y: 0, fields: [] },
        { id: '3', tableName: 'Table 3', x: 0, y: 0, fields: [] },
      ],
      relations: [],
      selectedElementId: '',
    };

    // Act
    const result: DropdownOptionVm[] = mapTableListToDropdownVm(canvasSchema);

    // Assert
    expect(result).toEqual([
      { id: '1', label: 'Table 1' },
      { id: '2', label: 'Table 2' },
      { id: '3', label: 'Table 3' },
    ]);
  });

  it('should return an empty array when table list is empty', () => {
    // Arrange
    const canvasSchema: DatabaseSchemaVm = {
      tables: [],
      relations: [],
      selectedElementId: '',
    };

    // Act
    const result: DropdownOptionVm[] = mapTableListToDropdownVm(canvasSchema);

    // Assert
    expect(result).toEqual([]);
  });
});
