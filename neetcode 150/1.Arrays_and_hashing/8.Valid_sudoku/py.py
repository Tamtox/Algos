def calculateSection (row, col):
    result = 0
    if(row < 3):
        if(col < 3):
            result = 0
        elif(col < 6):
            result = 1
        else:
            result = 2
    elif (row < 6):
        if(col < 3):
            result = 3
        elif(col < 6):
            result = 4
        else:
            result = 5
    elif (row < 9):
        if(col < 3):
            result = 6
        elif(col < 6):
            result = 7
        else:
            result = 8
    return result

class Solution:
    def isValidSudoku(self, board: List[List[str]]) -> bool:
        length = len(board)
        rows = []
        cols = []
        sections = []
        for _ in range(length):
            rows.append(set())
            cols.append(set())
            sections.append(set())
        for i in range(length):
            row = board[i]
            for j in range(length):
                section = calculateSection(i, j)
                if row[j] == '.':
                    continue
                if(row[j] in rows[i]):
                    return False
                if(row[j] in cols[j]):
                    return False
                if(row[j] in sections[section]):
                    return False
                rows[i].add(row[j])
                cols[j].add(row[j])
                sections[section].add(row[j])
        return True