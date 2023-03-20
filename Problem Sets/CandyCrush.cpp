#include <iostream>
#include <vector>

using namespace std;


    vector<vector<int>> candyCrush(vector<vector<int>>& board) {
        int M = board.size(), N = board[0].size();
        bool found = false;
        for (int i = 0; i < M; ++i) {
            for (int j = 0; j + 2 < N; ++j) {
                int v = abs(board[i][j]);
                if (!v || abs(board[i][j + 1]) != v || abs(board[i][j + 2]) != v) continue;
                found = true;
                board[i][j] = board[i][j + 1] = board[i][j + 2] = -v;
            }
        }
        for (int i = 0; i + 2 < M; ++i) {
            for (int j = 0; j < N; ++j) {
                int v = abs(board[i][j]);
                if (!v || abs(board[i + 1][j]) != v || abs(board[i + 2][j]) != v) continue;
                found = true;
                board[i][j] = board[i + 1][j] = board[i + 2][j] = -v;
            }
        }
        
        /*for (int j = 0; j < N; ++j) {
            int k = M - 1;
            for (int i = M - 1; i >= 0; --i) {
                if (board[i][j] <= 0) continue;
                board[k--][j] = board[i][j];
            }
            while (k >= 0) board[k--][j] = 0;
        }*/
        return board;
        return found ? candyCrush(board) : board;
    }

    
    
int main()
{
    vector<vector<int>> board{{1,1,1,1},{2,1,1,2},{3,1,2,2}};
    
    candyCrush(board);
    
    for (int i = 0; i < board.size(); i++) {
        for (int j = 0; j < board[0].size(); j++) {
            std::cout << board[i][j] << std::endl;
        }
    }

    return 0;
}