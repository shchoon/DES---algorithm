const S_BOX = [
    //S_BOX_1
    [
      [14, 4, 13, 1, 2, 15, 11, 8, 3, 10, 6, 12, 5, 9, 0, 7],
      [0, 15, 7, 4, 14, 2, 13, 1, 10, 6, 12, 11, 9, 5, 3, 8],
      [4, 1, 14, 8, 13, 6, 2, 11, 15, 12, 9, 7, 3, 10, 5, 0],
      [15, 12, 8, 2, 4, 9, 1, 7, 5, 11, 3, 14, 10, 0, 6, 13]
    ],
    //S_BOX_2
    [
      [15, 1, 8, 14, 6, 11, 3, 4, 9, 7, 2, 13, 12, 0, 5, 10],
      [3, 13, 4, 7, 15, 2, 8, 14, 12, 0, 1, 10, 6, 9, 11, 5],
      [0, 14, 7, 11, 10, 4, 13, 1, 5, 8, 12, 6, 9, 3, 2, 15],
      [13, 8, 10, 1, 3, 15, 4, 2, 11, 6, 7, 12, 0, 5, 14, 9]
    ],
    //S_BOX_3
    [
      [10, 0, 9, 14, 6, 3, 15, 5, 1, 13, 12, 7, 11, 4, 2, 8],
      [13, 7, 0, 9, 3, 4, 6, 10, 2, 8, 5, 14, 12, 11, 15, 1],
      [13, 6, 4, 9, 8, 15, 3, 0, 11, 1, 2, 12, 5, 10, 14, 7],
      [1, 10, 13, 0, 6, 9, 8, 7, 4, 15, 14, 3, 11, 5, 2, 12]
    ],
    //S_BOX_4
    [
      [7, 13, 14, 3, 0, 6, 9, 10, 1, 2, 8, 5, 11, 12, 4, 15],
      [13, 8, 11, 5, 6, 15, 0, 3, 4, 7, 2, 12, 1, 10, 14, 9],
      [10, 6, 9, 0, 12, 11, 7, 13, 15, 1, 3, 14, 5, 2, 8, 4],
      [3, 15, 0, 6, 10, 1, 13, 8, 9, 4, 5, 11, 12, 7, 2, 14]
    ],
    //S_BOX_5
    [
      [2, 12, 4, 1, 7, 10, 11, 6, 8, 5, 3, 15, 13, 0, 14, 9],
      [14, 11, 2, 12, 4, 7, 13, 1, 5, 0, 15, 10, 3, 9, 8, 6],
      [4, 2, 1, 11, 10, 13, 7, 8, 15, 9, 12, 5, 6, 3, 0, 14],
      [11, 8, 12, 7, 1, 14, 2, 13, 6, 15, 0, 9, 10, 4, 5, 3]
    ],
    //S_BOX_6
    [
      [12, 1, 10, 15, 9, 2, 6, 8, 0, 13, 3, 4, 14, 7, 5, 11],
      [10, 15, 4, 2, 7, 12, 9, 5, 6, 1, 13, 14, 0, 11, 3, 8],
      [9, 14, 15, 5, 2, 8, 12, 3, 7, 0, 4, 10, 1, 13, 11, 6],
      [4, 3, 2, 12, 9, 5, 15, 10, 11, 14, 1, 7, 6, 0, 8, 13]
    ],
    //S_BOX_7
    [
      [4, 11, 2, 14, 15, 0, 8, 13, 3, 12, 9, 7, 5, 10, 6, 1],
      [13, 0, 11, 7, 4, 9, 1, 10, 14, 3, 5, 12, 2, 15, 8, 6],
      [1, 4, 11, 13, 12, 3, 7, 14, 10, 15, 6, 8, 0, 5, 9, 2],
      [6, 11, 13, 8, 1, 4, 10, 7, 9, 5, 0, 15, 14, 2, 3, 12]
    ],
    //S_BOX_8
    [
      [13, 2, 8, 4, 6, 15, 11, 1, 10, 9, 3, 14, 5, 0, 12, 7],
      [1, 15, 13, 8, 10, 3, 7, 4, 12, 5, 6, 11, 0, 14, 9, 2],
      [7, 11, 4, 1, 9, 12, 14, 2, 0, 6, 10, 13, 15, 3, 5, 8],
      [2, 1, 14, 7, 4, 10, 8, 13, 15, 12, 9, 0, 3, 5, 6, 11]
    ]
  ];
  //초기 per table
  const IP_TABLE = [
    58, 50, 42, 34, 26, 18, 10, 2,
    60, 52, 44, 36, 28, 20, 12, 4,
    62, 54, 46, 38, 30, 22, 14, 6,
    64, 56, 48, 40, 32, 24, 16, 8,
    57, 49, 41, 33, 25, 17, 9, 1,
    59, 51, 43, 35, 27, 19, 11, 3,
    61, 53, 45, 37, 29, 21, 13, 5,
    63, 55, 47, 39, 31, 23, 15, 7
  ];
  //마지막 per
  const IIP_TABLE = [
    40, 8, 48, 16, 56, 24, 64, 32,
    39, 7, 47, 15, 55, 23, 63, 31,
    38, 6, 46, 14, 54, 22, 62, 30,
    37, 5, 45, 13, 53, 21, 61, 29,
    36, 4, 44, 12, 52, 20, 60, 28,
    35, 3, 43, 11, 51, 19, 59, 27,
    34, 2, 42, 10, 50, 18, 58, 26,
    33, 1, 41, 9, 49, 17, 57, 25
  ];
  //p-box permutation
  const P_BOX_TABLE = [
    16, 7, 20, 21, 29, 12, 28, 17, 1, 15, 23, 26, 5, 18, 31, 10,
    2, 8, 24, 14, 32, 27, 3, 9, 19, 13, 30, 6, 22, 11, 4, 25
  ];
  //pc-1 (key_schedule)
  const PC_1 = [
    57, 49, 41, 33, 25, 17, 9,
    1, 58, 50, 42, 34, 26, 18,
    10, 2, 59, 51, 43, 35, 27,
    19, 11, 3, 60, 52, 44, 36,
    63, 55, 47, 39, 31, 23, 15,
    7, 62, 54, 46, 38, 30, 22,
    14, 6, 61, 53, 45, 37, 29,
    21, 13, 5, 28, 20, 12, 4
  ]
  //pc-2 (key schedule)
  const PC_2 = [
    14, 17, 11, 24, 1, 5,
    3, 28, 15, 6, 21, 10,
    23, 19, 12, 4, 26, 8,
    16, 7, 27, 20, 13, 2,
    41, 52, 31, 37, 47, 55,
    30, 40, 51, 45, 33, 48,
    44, 49, 39, 56, 34, 53,
    46, 42, 50, 36, 29, 32
  ]
  //plainText
  const plainText = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
       0, 0, 0];
  console.log('plainText', ...plainText)  
  
  const original_key = [
    [1, 1, 0, 0, 0, 0, 0, 0], 
    [0, 0, 0, 0, 1, 0, 1, 0],
    [0, 1, 0, 0, 1, 0, 0, 1], 
    [1, 0, 0, 1, 0, 0, 1, 1],
    [0, 1, 1, 1, 1, 0, 1, 0],
    [0, 1, 0, 0, 0, 1, 1, 0], 
    [1, 0, 0, 1, 0, 0, 1, 0], 
    [0, 0, 1, 0, 0, 1, 1, 1]
    ];
    
    let key = [
    0, 0, 0, 0, 0, 0, 0, 0, 
    0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 
    0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 
    0, 0, 0, 0, 0, 0, 0, 0, 
    0, 0, 0, 0, 0, 0, 0, 0
    ];
    
  console.log('original_key', original_key)
  //key 생성
  let hex = []
  const bin_to_hex = (L, bits_length) => {
    let four_bits = [];
    for(var i=0; i<bits_length; i+=4){
      let bits = L[i].toString() + L[i+1].toString() + L[i+2].toString() + L[i+3].toString();
      four_bits.push(bits)
    }
    for(var j=0; j<four_bits.length; j++){
      hex.push(parseInt(four_bits[j],2).toString(16))
    }
    console.log(hex)
  }
  //2진수 16진수로 변환
  const hex_to_bin = (hex) => {
    let bin = [];
    for(var i=0; i<hex.length; i++){
      bin.push(parseInt(hex[i],16).toString(2).padStart(4, '0'))
    }
    return bin
  }
  //16진수 2진수로 변환
  let initial_per = [];
    const permutation = (text) => {
      for(var i=0; i<IP_TABLE.length; i++){
        initial_per.push(text[IP_TABLE[i]-1])
      }
    }
  permutation(plainText)
  console.log('initial_per', initial_per)
  //초기 permutation
  const per_PC_1 = () => {
    let bits = []
    for(var i=0; i<PC_1.length; i++){
      bits.push(key[PC_1[i]-1])
    }
    return bits;
  }
  let except_parity_key = per_PC_1();
  //key 56 비트로 줄이기
  console.log('except_parity_key', except_parity_key)
  
  //key를 8개의 array로 나눠놔서 각 array의 마지막 element만 뺌
  // key schedule 1 64비트에서 56비트로 줄임 parity bit 뺌
  
  // key 56비트를 28비트씩 나눔 순서대로
  
  const shift_bit = (bits, shifted_array, roundNum) => {
      if(roundNum === 1 || roundNum === 2 || roundNum === 9 || roundNum === 16){
        shifted_array = [...bits, bits[0]];
        shifted_array.shift();
      } else {
        shifted_array = [...bits, bits[0], bits[1]];
        shifted_array.shift();
        shifted_array.shift();
      }
    return shifted_array
  }
  
  //roundNum에 맞게 shift 해주기
  const subkeyFuc = (combined) => {
    let combine_C_D = [...combined[0], ...combined[1]]
    let result = [];
    for(var i=0; i<PC_2.length; i++){
      result.push(combine_C_D[PC_2[i]-1])
    }
    return result;
  }
  const combine = (i, combined) => {
    //console.log(combine_C_D)
    let C0;
    let D0;
    if(i === 1){
      C0 = [...except_parity_key.slice(0, 28)]
      D0 = [...except_parity_key.slice(28, 56)]
      console.log('C0', C0);
      console.log('D0', D0);
    } else {
      C0 = combined[0];
      D0 = combined[1];
    }

    //console.log(`C${i-1}`, C0);
    //console.log(`D${i-1}`, D0);
    //shift 되기 전
    let C1;
    let D1;
    C1 = shift_bit(C0, C1, i);
    D1 = shift_bit(D0, D1, i);
    //console.log(`C${i}`, C1);
    //console.log(`D${i}`, D1);
    return [C1, D1];
    
  }
  
    const expansion_E_of_R = (R) => {
    let four_bits = [];
    for(var i=0; i<32; i+=4){
      four_bits.push([R[i], R[i+1], R[i+2], R[i+3]])
    }
    let result = [];
    for(var j=0; j<8; j++){
      let first;
      let last;
      if(j === 0){
        first = 7;
        last = j+1;
      } else if(j === 7){
        first = j-1;
        last = 0;
      } else {
        first = j-1;
        last = j+1;
      }
      
      result.push(four_bits[first][3], four_bits[j][0], four_bits[j][1], 
        four_bits[j][2], four_bits[j][3], four_bits[last][0]);
    }
    return result;
}
    
//4비트에서 6비트로 expansion
const xor = (expansion_R, subkey) => {
  let result = [];
  for(var i=0; i<48; i++){
      result.push(expansion_R[i] ^ subkey[i]);
    }
      return [[...result.slice(0,6)], [...result.slice(6,12)], [...result.slice(12,18)], [...result.slice(18,24)], 
      [...result.slice(24,30)], [...result.slice(30,36)], [...result.slice(36,42)], [...result.slice(42,48)]];
}
 
//subkey와 exL의 XOR 연산 S_Box 돌릴 준비 완료
const cal_SBox = (S_BOX, xor_expansion_R_key) => {
  let result = [];
  for(var i=0; i<S_BOX.length; i++){
      let row = parseInt(String(xor_expansion_R_key[i][0]) + String(xor_expansion_R_key[i][5]), 2) 
      //parseInt('11', 2) => 3
      let col = parseInt(String(xor_expansion_R_key[i][1]) + String(xor_expansion_R_key[i][2]) 
      + String(xor_expansion_R_key[i][3]) + String(xor_expansion_R_key[i][4]), 2)
      //parseInt('1010', 2) => 10
      result.push(S_BOX[i][row][col]);
  }
  return result;
}
//S_BOX 연산


const num_to_bin = (result_of_SBOX) => {
  let bin = [];
  for(var i=0; i<result_of_SBOX.length; i++){
    bin.push(result_of_SBOX[i].toString(2).padStart(4, '0'))
  }

  return bin;
}

//calculated_SBox 2진수로 변환(4bits)

const P_BOX_per = (P_BOX_TABLE, binary_of_result_SBOX) => {
  let convert_output = [];
  for(var i=0; i<binary_of_result_SBOX.length; i++){
    convert_output.push(...Array.from(String(binary_of_result_SBOX[i]), Number))
  }
  console.log('convert_output', convert_output);
  let result = [];
  for(var j=0; j<P_BOX_TABLE.length; j++){
    result.push(convert_output[P_BOX_TABLE[j]-1])
  }
  return result;
}
  let L = [...initial_per.slice(0,32)];
  let R = [...initial_per.slice(32,64)];
  console.log('L0', L);
  console.log('R0',R);
  //let subkey;
  const F_function = (R, subkey) => {
    let expansion_R = expansion_E_of_R(R)
    console.log('expansion_R', expansion_R)
    let xor_expansion_R_key = xor(expansion_R, subkey);
    console.log('xor_expansion_R_key', xor_expansion_R_key);
    let result_of_SBOX =  cal_SBox(S_BOX, xor_expansion_R_key);
    console.log('result_of_SBOX', result_of_SBOX);
    let binary_of_result_SBOX = num_to_bin(result_of_SBOX);
    console.log('binary_of_result_SBOX', binary_of_result_SBOX);
    let per_PBOX_of_result_SBOX = P_BOX_per(P_BOX_TABLE, binary_of_result_SBOX);
    return per_PBOX_of_result_SBOX;
    //console.log('per_PBOX_of_result_SBOX', per_PBOX_of_result_SBOX);
  }
  
  let combined
  
  const round = (i) => {
    combined = combine(i, combined)
    //console.log(combined[0])
    //console.log(`C${i}`, combined[0])
    //console.log(`D${i}`, combined[1])
    let subkey = subkeyFuc(combined)
    //combine(i+1, combined)
    console.log(`subkey${i}`, subkey);
    let result_of_F = F_function(R, subkey);
    //console.log(result_of_F);
    let result_xor_L_F_fuc = [];
    //console.log(result_of_F);
    for(var j=0; j<L.length; j++){
      result_xor_L_F_fuc.push(result_of_F[j] ^ L[j]);
    }
    if(i === 16){
      L = result_xor_L_F_fuc;
      R= R;
      //마지막 라운드에는 swapper 실행 x
    }else {
      L = R;
      R = result_xor_L_F_fuc;
    }
      
    console.log(`round${i}`)
    console.log(`L${i}`, L);
    console.log(`R${i}`, R);
    
    //return [L, R];
  }
  for(var i=1; i<=16; i++){
    round(i)
  }
  
  let result1 = [...L, ...R]
  let result2 = [];
  for(var i=0 ; i<IIP_TABLE.length; i++){
    result2.push(result1[IIP_TABLE[i]-1])
  }
  console.log(result2)
  bin_to_hex(result2, 64)