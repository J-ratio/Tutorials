![[x9eiryu7.bmp]]


Here we have an image giving a metaphorical representation of CPU and RAM, where ram is a binary table, registers are sticky notes containing useful bits of information, control unit as a ledger containing procedure to be carried out for a given instruction and ALU as a calculator. All the parts other than the clipboard(Ram) form a CPU.

CPU and RAM are connected by 3 types of busses(not really, its actually quite complex),
1) Control Bus - CU > RAM
2) Address Bus - MAR > RAM
3) Data Bus - RAM > MDR

Now the Basic Operations,
1) Fetch - Gets the next instruction to be executed (Flow: PC>MAR>AddrBus>RAM>DataBus>MDR>IR -> Increment PC by 1)
1) Decode - Gives required operations for the fetched instructions (Flow IR(opCode)>MemBus>CU -> CU Decodes the insctructions and provides with next steps)
2) Execute - Executes? lol (Flow IR(operand)>MAR -> Now depending on the previous instruction, the next steps will vary)