package com.example.myapplication

import android.os.Bundle
import android.util.Log
import android.widget.Button
import android.widget.TextView
import android.widget.Toast
import androidx.appcompat.app.AppCompatActivity

private const val TAG = "MainActivity"

class MainActivity : AppCompatActivity() {

    fun logging() {
        Log.v(TAG, "Hello WOrld!")
    }
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
        val rollBtn = findViewById<Button>(R.id.button)

        rollBtn.setOnClickListener {
            val toast = Toast.makeText(this, "Dice Rolled!", Toast.LENGTH_SHORT)
            toast.show()
            rollDice()
            logging()
        }
    }

    private fun rollDice() {

        val dice = Dice(6)
        findViewById<TextView>(R.id.textView).text = dice.roll().toString()
    }

    class Dice(private val sideNum: Int) {

        fun roll(): Int {
            return (1..sideNum).random()
        }
    }
}

