package com.example.myapplication

import android.os.Bundle
import android.util.Log
import androidx.appcompat.app.AppCompatActivity
import com.example.myapplication.databinding.ActivityMainBinding
import java.text.NumberFormat

private const val TAG = "MainActivity"

class MainActivity : AppCompatActivity() {

    private fun logging() {
        Log.v(TAG, "Hello World!")
    }

    lateinit var binding: ActivityMainBinding

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        binding = ActivityMainBinding.inflate(layoutInflater)
        setContentView(binding.root)
        logging()

        binding.CalculateButton.setOnClickListener{ calculateTip() }

    }

    private fun calculateTip() {

        val cost: Double = binding.costOfServiceTextField.text.toString().toDouble()
        val tipPercentage= when(binding.tipOptions.checkedRadioButtonId) {
            binding.option20Percent.id -> 0.2
            binding.option18Percent.id -> 0.18
            else -> 0.15
        }

        val tip = if(binding.roundUpSwitch.isChecked) kotlin.math.ceil(cost*tipPercentage)  else cost*tipPercentage

        val formattedTip = NumberFormat.getCurrencyInstance().format(tip)
        binding.tipAmount.text = "Tip Amount: $formattedTip"

    }
}

