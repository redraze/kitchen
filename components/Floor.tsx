import { useGLTF } from '@react-three/drei';
import { GLTF } from 'three-stdlib';
import { Vector3 } from 'three/src/Three';

type GLTFResult = GLTF & {
  nodes: {
    base: THREE.Mesh
    Cube065: THREE.Mesh
    Cube066: THREE.Mesh
    Cube001: THREE.Mesh
    Cube002: THREE.Mesh
    Cube003: THREE.Mesh
    Cube004: THREE.Mesh
    Cube005: THREE.Mesh
    Cube006: THREE.Mesh
    Cube007: THREE.Mesh
    Cube008: THREE.Mesh
    Cube009: THREE.Mesh
    Cube010: THREE.Mesh
    Cube011: THREE.Mesh
    Cube012: THREE.Mesh
    Cube013: THREE.Mesh
    Cube014: THREE.Mesh
    Cube015: THREE.Mesh
    Cube016: THREE.Mesh
    Cube017: THREE.Mesh
    Cube018: THREE.Mesh
    Cube019: THREE.Mesh
    Cube020: THREE.Mesh
    Cube021: THREE.Mesh
    Cube022: THREE.Mesh
    Cube023: THREE.Mesh
    Cube024: THREE.Mesh
    Cube025: THREE.Mesh
    Cube026: THREE.Mesh
    Cube027: THREE.Mesh
    Cube028: THREE.Mesh
    Cube029: THREE.Mesh
    Cube030: THREE.Mesh
    Cube031: THREE.Mesh
    Cube032: THREE.Mesh
    Cube245: THREE.Mesh
    Cube246: THREE.Mesh
    Cube247: THREE.Mesh
    Cube248: THREE.Mesh
    Cube249: THREE.Mesh
    Cube250: THREE.Mesh
    Cube251: THREE.Mesh
    Cube252: THREE.Mesh
    Cube253: THREE.Mesh
    Cube254: THREE.Mesh
    Cube255: THREE.Mesh
    Cube256: THREE.Mesh
    Cube257: THREE.Mesh
    Cube258: THREE.Mesh
    Cube033: THREE.Mesh
    Cube034: THREE.Mesh
    Cube035: THREE.Mesh
    Cube036: THREE.Mesh
    Cube037: THREE.Mesh
    Cube038: THREE.Mesh
    Cube039: THREE.Mesh
    Cube040: THREE.Mesh
    Cube041: THREE.Mesh
    Cube042: THREE.Mesh
    Cube043: THREE.Mesh
    Cube044: THREE.Mesh
    Cube045: THREE.Mesh
    Cube046: THREE.Mesh
    Cube047: THREE.Mesh
    Cube048: THREE.Mesh
    Cube049: THREE.Mesh
    Cube050: THREE.Mesh
    Cube051: THREE.Mesh
    Cube052: THREE.Mesh
    Cube053: THREE.Mesh
    Cube054: THREE.Mesh
    Cube055: THREE.Mesh
    Cube056: THREE.Mesh
    Cube057: THREE.Mesh
    Cube058: THREE.Mesh
    Cube059: THREE.Mesh
    Cube060: THREE.Mesh
    Cube061: THREE.Mesh
    Cube062: THREE.Mesh
    Cube063: THREE.Mesh
    Cube064: THREE.Mesh
    Cube067: THREE.Mesh
    Cube068: THREE.Mesh
    Cube259: THREE.Mesh
    Cube260: THREE.Mesh
    Cube261: THREE.Mesh
    Cube262: THREE.Mesh
    Cube263: THREE.Mesh
    Cube264: THREE.Mesh
    Cube265: THREE.Mesh
    Cube266: THREE.Mesh
    Cube267: THREE.Mesh
    Cube268: THREE.Mesh
    Cube269: THREE.Mesh
    Cube270: THREE.Mesh
    Cube271: THREE.Mesh
    Cube272: THREE.Mesh
    Cube273: THREE.Mesh
    Cube274: THREE.Mesh
    Cube275: THREE.Mesh
    Cube276: THREE.Mesh
    Cube277: THREE.Mesh
    Cube278: THREE.Mesh
    Cube279: THREE.Mesh
    Cube280: THREE.Mesh
    Cube281: THREE.Mesh
    Cube282: THREE.Mesh
    Cube283: THREE.Mesh
    Cube284: THREE.Mesh
    Cube285: THREE.Mesh
    Cube286: THREE.Mesh
    Cube287: THREE.Mesh
    Cube288: THREE.Mesh
    Cube289: THREE.Mesh
    Cube290: THREE.Mesh
    Cube291: THREE.Mesh
    Cube292: THREE.Mesh
    Cube069: THREE.Mesh
    Cube070: THREE.Mesh
    Cube071: THREE.Mesh
    Cube072: THREE.Mesh
    Cube073: THREE.Mesh
    Cube074: THREE.Mesh
    Cube075: THREE.Mesh
    Cube076: THREE.Mesh
    Cube077: THREE.Mesh
    Cube078: THREE.Mesh
    Cube079: THREE.Mesh
    Cube080: THREE.Mesh
    Cube081: THREE.Mesh
    Cube082: THREE.Mesh
    Cube083: THREE.Mesh
    Cube084: THREE.Mesh
    Cube085: THREE.Mesh
    Cube086: THREE.Mesh
    Cube087: THREE.Mesh
    Cube088: THREE.Mesh
    Cube089: THREE.Mesh
    Cube090: THREE.Mesh
    Cube091: THREE.Mesh
    Cube092: THREE.Mesh
    Cube093: THREE.Mesh
    Cube094: THREE.Mesh
    Cube095: THREE.Mesh
    Cube096: THREE.Mesh
    Cube097: THREE.Mesh
    Cube098: THREE.Mesh
    Cube099: THREE.Mesh
    Cube100: THREE.Mesh
    Cube101: THREE.Mesh
    Cube102: THREE.Mesh
    Cube293: THREE.Mesh
    Cube294: THREE.Mesh
    Cube295: THREE.Mesh
    Cube296: THREE.Mesh
    Cube297: THREE.Mesh
    Cube298: THREE.Mesh
    Cube299: THREE.Mesh
    Cube300: THREE.Mesh
    Cube301: THREE.Mesh
    Cube302: THREE.Mesh
    Cube303: THREE.Mesh
    Cube304: THREE.Mesh
    Cube305: THREE.Mesh
    Cube306: THREE.Mesh
    Cube307: THREE.Mesh
    Cube308: THREE.Mesh
    Cube309: THREE.Mesh
    Cube310: THREE.Mesh
    Cube311: THREE.Mesh
    Cube312: THREE.Mesh
    Cube313: THREE.Mesh
    Cube314: THREE.Mesh
    Cube315: THREE.Mesh
    Cube316: THREE.Mesh
    Cube317: THREE.Mesh
    Cube318: THREE.Mesh
    Cube319: THREE.Mesh
    Cube320: THREE.Mesh
    Cube321: THREE.Mesh
    Cube322: THREE.Mesh
    Cube323: THREE.Mesh
    Cube324: THREE.Mesh
    Cube325: THREE.Mesh
    Cube326: THREE.Mesh
    Cube103: THREE.Mesh
    Cube104: THREE.Mesh
    Cube105: THREE.Mesh
    Cube106: THREE.Mesh
    Cube107: THREE.Mesh
    Cube108: THREE.Mesh
    Cube109: THREE.Mesh
    Cube110: THREE.Mesh
    Cube111: THREE.Mesh
    Cube112: THREE.Mesh
    Cube113: THREE.Mesh
    Cube114: THREE.Mesh
    Cube115: THREE.Mesh
    Cube116: THREE.Mesh
    Cube117: THREE.Mesh
    Cube118: THREE.Mesh
    Cube119: THREE.Mesh
    Cube120: THREE.Mesh
    Cube121: THREE.Mesh
    Cube122: THREE.Mesh
    Cube123: THREE.Mesh
    Cube124: THREE.Mesh
    Cube125: THREE.Mesh
    Cube126: THREE.Mesh
    Cube127: THREE.Mesh
    Cube128: THREE.Mesh
    Cube129: THREE.Mesh
    Cube130: THREE.Mesh
    Cube131: THREE.Mesh
    Cube132: THREE.Mesh
    Cube133: THREE.Mesh
    Cube134: THREE.Mesh
    Cube135: THREE.Mesh
    Cube136: THREE.Mesh
    Cube327: THREE.Mesh
    Cube328: THREE.Mesh
    Cube329: THREE.Mesh
    Cube330: THREE.Mesh
    Cube331: THREE.Mesh
    Cube332: THREE.Mesh
    Cube333: THREE.Mesh
    Cube334: THREE.Mesh
    Cube335: THREE.Mesh
    Cube336: THREE.Mesh
    Cube337: THREE.Mesh
    Cube338: THREE.Mesh
    Cube339: THREE.Mesh
    Cube340: THREE.Mesh
    Cube341: THREE.Mesh
    Cube342: THREE.Mesh
    Cube343: THREE.Mesh
    Cube344: THREE.Mesh
    Cube345: THREE.Mesh
    Cube346: THREE.Mesh
    Cube347: THREE.Mesh
    Cube348: THREE.Mesh
    Cube349: THREE.Mesh
    Cube350: THREE.Mesh
    Cube351: THREE.Mesh
    Cube352: THREE.Mesh
    Cube353: THREE.Mesh
    Cube354: THREE.Mesh
    Cube355: THREE.Mesh
    Cube356: THREE.Mesh
    Cube357: THREE.Mesh
    Cube358: THREE.Mesh
    Cube359: THREE.Mesh
    Cube360: THREE.Mesh
    Cube137: THREE.Mesh
    Cube138: THREE.Mesh
    Cube139: THREE.Mesh
    Cube140: THREE.Mesh
    Cube141: THREE.Mesh
    Cube142: THREE.Mesh
    Cube143: THREE.Mesh
    Cube144: THREE.Mesh
    Cube145: THREE.Mesh
    Cube146: THREE.Mesh
    Cube147: THREE.Mesh
    Cube148: THREE.Mesh
    Cube149: THREE.Mesh
    Cube150: THREE.Mesh
    Cube151: THREE.Mesh
    Cube152: THREE.Mesh
    Cube153: THREE.Mesh
    Cube154: THREE.Mesh
    Cube155: THREE.Mesh
    Cube156: THREE.Mesh
    Cube157: THREE.Mesh
    Cube158: THREE.Mesh
    Cube159: THREE.Mesh
    Cube160: THREE.Mesh
    Cube161: THREE.Mesh
    Cube162: THREE.Mesh
    Cube163: THREE.Mesh
    Cube164: THREE.Mesh
    Cube165: THREE.Mesh
    Cube166: THREE.Mesh
    Cube167: THREE.Mesh
    Cube168: THREE.Mesh
    Cube169: THREE.Mesh
    Cube170: THREE.Mesh
    Cube361: THREE.Mesh
    Cube362: THREE.Mesh
    Cube363: THREE.Mesh
    Cube364: THREE.Mesh
    Cube365: THREE.Mesh
    Cube366: THREE.Mesh
    Cube367: THREE.Mesh
    Cube368: THREE.Mesh
    Cube369: THREE.Mesh
    Cube370: THREE.Mesh
    Cube371: THREE.Mesh
    Cube372: THREE.Mesh
    Cube373: THREE.Mesh
    Cube374: THREE.Mesh
    Cube375: THREE.Mesh
    Cube376: THREE.Mesh
    Cube377: THREE.Mesh
    Cube378: THREE.Mesh
    Cube379: THREE.Mesh
    Cube380: THREE.Mesh
    Cube381: THREE.Mesh
    Cube382: THREE.Mesh
    Cube383: THREE.Mesh
    Cube384: THREE.Mesh
    Cube385: THREE.Mesh
    Cube386: THREE.Mesh
    Cube387: THREE.Mesh
    Cube388: THREE.Mesh
    Cube389: THREE.Mesh
    Cube390: THREE.Mesh
    Cube391: THREE.Mesh
    Cube392: THREE.Mesh
    Cube393: THREE.Mesh
    Cube394: THREE.Mesh
    Cube171: THREE.Mesh
    Cube172: THREE.Mesh
    Cube173: THREE.Mesh
    Cube174: THREE.Mesh
    Cube175: THREE.Mesh
    Cube176: THREE.Mesh
    Cube177: THREE.Mesh
    Cube178: THREE.Mesh
    Cube179: THREE.Mesh
    Cube180: THREE.Mesh
    Cube181: THREE.Mesh
    Cube182: THREE.Mesh
    Cube183: THREE.Mesh
    Cube184: THREE.Mesh
    Cube185: THREE.Mesh
    Cube186: THREE.Mesh
    Cube187: THREE.Mesh
    Cube188: THREE.Mesh
    Cube189: THREE.Mesh
    Cube190: THREE.Mesh
    Cube191: THREE.Mesh
    Cube192: THREE.Mesh
    Cube193: THREE.Mesh
    Cube194: THREE.Mesh
    Cube195: THREE.Mesh
    Cube196: THREE.Mesh
    Cube197: THREE.Mesh
    Cube198: THREE.Mesh
    Cube199: THREE.Mesh
    Cube200: THREE.Mesh
    Cube201: THREE.Mesh
    Cube202: THREE.Mesh
    Cube203: THREE.Mesh
    Cube204: THREE.Mesh
    Cube395: THREE.Mesh
    Cube396: THREE.Mesh
    Cube397: THREE.Mesh
    Cube398: THREE.Mesh
    Cube399: THREE.Mesh
    Cube400: THREE.Mesh
    Cube401: THREE.Mesh
    Cube402: THREE.Mesh
    Cube403: THREE.Mesh
    Cube404: THREE.Mesh
    Cube405: THREE.Mesh
    Cube406: THREE.Mesh
    Cube407: THREE.Mesh
    Cube408: THREE.Mesh
    Cube409: THREE.Mesh
    Cube410: THREE.Mesh
    Cube411: THREE.Mesh
    Cube412: THREE.Mesh
    Cube413: THREE.Mesh
    Cube414: THREE.Mesh
    Cube415: THREE.Mesh
    Cube416: THREE.Mesh
    Cube417: THREE.Mesh
    Cube418: THREE.Mesh
    Cube419: THREE.Mesh
    Cube420: THREE.Mesh
    Cube421: THREE.Mesh
    Cube422: THREE.Mesh
    Cube423: THREE.Mesh
    Cube424: THREE.Mesh
    Cube425: THREE.Mesh
    Cube426: THREE.Mesh
    Cube427: THREE.Mesh
    Cube428: THREE.Mesh
    Cube225: THREE.Mesh
    Cube226: THREE.Mesh
    Cube227: THREE.Mesh
    Cube228: THREE.Mesh
    Cube229: THREE.Mesh
    Cube230: THREE.Mesh
    Cube231: THREE.Mesh
    Cube232: THREE.Mesh
    Cube233: THREE.Mesh
    Cube234: THREE.Mesh
    Cube235: THREE.Mesh
    Cube236: THREE.Mesh
    Cube237: THREE.Mesh
    Cube238: THREE.Mesh
    Cube205: THREE.Mesh
    Cube206: THREE.Mesh
    Cube207: THREE.Mesh
    Cube208: THREE.Mesh
    Cube209: THREE.Mesh
    Cube210: THREE.Mesh
    Cube211: THREE.Mesh
    Cube212: THREE.Mesh
    Cube213: THREE.Mesh
    Cube214: THREE.Mesh
    Cube215: THREE.Mesh
    Cube216: THREE.Mesh
    Cube217: THREE.Mesh
    Cube218: THREE.Mesh
    Cube219: THREE.Mesh
    Cube220: THREE.Mesh
    Cube221: THREE.Mesh
    Cube222: THREE.Mesh
    Cube223: THREE.Mesh
    Cube224: THREE.Mesh
    Cube429: THREE.Mesh
    Cube430: THREE.Mesh
    Cube431: THREE.Mesh
    Cube432: THREE.Mesh
    Cube433: THREE.Mesh
    Cube434: THREE.Mesh
    Cube435: THREE.Mesh
    Cube436: THREE.Mesh
    Cube437: THREE.Mesh
    Cube438: THREE.Mesh
    Cube439: THREE.Mesh
    Cube440: THREE.Mesh
    Cube441: THREE.Mesh
    Cube442: THREE.Mesh
    Cube443: THREE.Mesh
    Cube444: THREE.Mesh
    Cube445: THREE.Mesh
    Cube446: THREE.Mesh
    Cube447: THREE.Mesh
    Cube448: THREE.Mesh
    Cube239: THREE.Mesh
    Cube240: THREE.Mesh
    Cube241: THREE.Mesh
    Cube242: THREE.Mesh
    Cube243: THREE.Mesh
    Cube244: THREE.Mesh
  }
  materials: {
    ['Material.001']: THREE.MeshPhysicalMaterial
  }
};

const url = 'objects/floor.gltf';

export default function Floor(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF(url) as unknown as GLTFResult;
  return (
    <group 
        {...props}
        scale={new Vector3(.6,.3,.5)}
        position={new Vector3(0,0,0)}
        dispose={null}
    >
      <mesh geometry={nodes.base.geometry} material={materials['Material.001']} position={[-0.07, -0.25, -0.07]} rotation={[0, -1.57, 0]} scale={[-19.62, -0.14, -19.62]} />
      <mesh geometry={nodes.Cube065.geometry} material={materials['Material.001']} position={[-16.25, 0.03, 19.07]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube066.geometry} material={materials['Material.001']} position={[-9.79, 0.03, 19.07]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube001.geometry} material={materials['Material.001']} position={[-3.32, 0.03, 19.07]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube002.geometry} material={materials['Material.001']} position={[3.15, 0.03, 19.07]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube003.geometry} material={materials['Material.001']} position={[9.62, 0.03, 19.07]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube004.geometry} material={materials['Material.001']} position={[16.09, 0.03, 19.07]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube005.geometry} material={materials['Material.001']} position={[-16.88, 0.03, 18.48]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -2.64]} />
      <mesh geometry={nodes.Cube006.geometry} material={materials['Material.001']} position={[-11.05, 0.03, 18.48]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube007.geometry} material={materials['Material.001']} position={[-4.58, 0.03, 18.48]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube008.geometry} material={materials['Material.001']} position={[1.89, 0.03, 18.48]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube009.geometry} material={materials['Material.001']} position={[8.36, 0.03, 18.48]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube010.geometry} material={materials['Material.001']} position={[14.83, 0.03, 18.48]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube011.geometry} material={materials['Material.001']} position={[18.68, 0.03, 18.48]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -0.63]} />
      <mesh geometry={nodes.Cube012.geometry} material={materials['Material.001']} position={[-17.59, 0.03, 17.89]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -1.91]} />
      <mesh geometry={nodes.Cube013.geometry} material={materials['Material.001']} position={[-12.48, 0.03, 17.89]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube014.geometry} material={materials['Material.001']} position={[-6.01, 0.03, 17.89]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube015.geometry} material={materials['Material.001']} position={[0.45, 0.03, 17.89]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube016.geometry} material={materials['Material.001']} position={[6.92, 0.03, 17.89]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube017.geometry} material={materials['Material.001']} position={[13.39, 0.03, 17.89]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube018.geometry} material={materials['Material.001']} position={[17.96, 0.03, 17.89]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -1.36]} />
      <mesh geometry={nodes.Cube019.geometry} material={materials['Material.001']} position={[-18.19, 0.03, 17.3]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -1.29]} />
      <mesh geometry={nodes.Cube020.geometry} material={materials['Material.001']} position={[-13.69, 0.03, 17.3]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube021.geometry} material={materials['Material.001']} position={[-7.22, 0.03, 17.3]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube022.geometry} material={materials['Material.001']} position={[-0.75, 0.03, 17.3]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube023.geometry} material={materials['Material.001']} position={[5.72, 0.03, 17.3]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube024.geometry} material={materials['Material.001']} position={[12.19, 0.03, 17.3]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube025.geometry} material={materials['Material.001']} position={[17.36, 0.03, 17.3]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -1.97]} />
      <mesh geometry={nodes.Cube026.geometry} material={materials['Material.001']} position={[-18.83, 0.03, 16.72]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -0.64]} />
      <mesh geometry={nodes.Cube027.geometry} material={materials['Material.001']} position={[-14.96, 0.03, 16.72]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube028.geometry} material={materials['Material.001']} position={[-8.49, 0.03, 16.72]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube029.geometry} material={materials['Material.001']} position={[-2.02, 0.03, 16.72]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube030.geometry} material={materials['Material.001']} position={[4.44, 0.03, 16.72]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube031.geometry} material={materials['Material.001']} position={[10.91, 0.03, 16.72]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube032.geometry} material={materials['Material.001']} position={[16.73, 0.03, 16.72]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -2.62]} />
      <mesh geometry={nodes.Cube245.geometry} material={materials['Material.001']} position={[-18.19, 0.03, -0.36]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -1.29]} />
      <mesh geometry={nodes.Cube246.geometry} material={materials['Material.001']} position={[-13.69, 0.03, -0.36]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube247.geometry} material={materials['Material.001']} position={[-7.22, 0.03, -0.36]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube248.geometry} material={materials['Material.001']} position={[-0.75, 0.03, -0.36]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube249.geometry} material={materials['Material.001']} position={[5.72, 0.03, -0.36]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube250.geometry} material={materials['Material.001']} position={[12.19, 0.03, -0.36]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube251.geometry} material={materials['Material.001']} position={[17.36, 0.03, -0.36]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -1.97]} />
      <mesh geometry={nodes.Cube252.geometry} material={materials['Material.001']} position={[-18.83, 0.03, -0.95]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -0.64]} />
      <mesh geometry={nodes.Cube253.geometry} material={materials['Material.001']} position={[-14.96, 0.03, -0.95]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube254.geometry} material={materials['Material.001']} position={[-8.49, 0.03, -0.95]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube255.geometry} material={materials['Material.001']} position={[-2.02, 0.03, -0.95]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube256.geometry} material={materials['Material.001']} position={[4.44, 0.03, -0.95]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube257.geometry} material={materials['Material.001']} position={[10.91, 0.03, -0.95]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube258.geometry} material={materials['Material.001']} position={[16.73, 0.03, -0.94]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -2.62]} />
      <mesh geometry={nodes.Cube033.geometry} material={materials['Material.001']} position={[-16.25, 0.03, 16.13]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube034.geometry} material={materials['Material.001']} position={[-9.79, 0.03, 16.13]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube035.geometry} material={materials['Material.001']} position={[-3.32, 0.03, 16.13]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube036.geometry} material={materials['Material.001']} position={[3.15, 0.03, 16.13]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube037.geometry} material={materials['Material.001']} position={[9.62, 0.03, 16.13]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube038.geometry} material={materials['Material.001']} position={[16.09, 0.03, 16.13]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube039.geometry} material={materials['Material.001']} position={[-16.88, 0.03, 15.54]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -2.64]} />
      <mesh geometry={nodes.Cube040.geometry} material={materials['Material.001']} position={[-11.05, 0.03, 15.54]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube041.geometry} material={materials['Material.001']} position={[-4.58, 0.03, 15.54]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube042.geometry} material={materials['Material.001']} position={[1.89, 0.03, 15.54]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube043.geometry} material={materials['Material.001']} position={[8.36, 0.03, 15.54]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube044.geometry} material={materials['Material.001']} position={[14.83, 0.03, 15.54]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube045.geometry} material={materials['Material.001']} position={[18.68, 0.03, 15.54]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -0.63]} />
      <mesh geometry={nodes.Cube046.geometry} material={materials['Material.001']} position={[-17.59, 0.03, 14.95]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -1.91]} />
      <mesh geometry={nodes.Cube047.geometry} material={materials['Material.001']} position={[-12.48, 0.03, 14.95]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube048.geometry} material={materials['Material.001']} position={[-6.01, 0.03, 14.95]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube049.geometry} material={materials['Material.001']} position={[0.45, 0.03, 14.95]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube050.geometry} material={materials['Material.001']} position={[6.92, 0.03, 14.95]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube051.geometry} material={materials['Material.001']} position={[13.39, 0.03, 14.95]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube052.geometry} material={materials['Material.001']} position={[17.96, 0.03, 14.95]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -1.36]} />
      <mesh geometry={nodes.Cube053.geometry} material={materials['Material.001']} position={[-18.19, 0.03, 14.36]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -1.29]} />
      <mesh geometry={nodes.Cube054.geometry} material={materials['Material.001']} position={[-13.69, 0.03, 14.36]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube055.geometry} material={materials['Material.001']} position={[-7.22, 0.03, 14.36]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube056.geometry} material={materials['Material.001']} position={[-0.75, 0.03, 14.36]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube057.geometry} material={materials['Material.001']} position={[5.72, 0.03, 14.36]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube058.geometry} material={materials['Material.001']} position={[12.19, 0.03, 14.36]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube059.geometry} material={materials['Material.001']} position={[17.36, 0.03, 14.36]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -1.97]} />
      <mesh geometry={nodes.Cube060.geometry} material={materials['Material.001']} position={[-18.83, 0.03, 13.77]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -0.64]} />
      <mesh geometry={nodes.Cube061.geometry} material={materials['Material.001']} position={[-14.96, 0.03, 13.77]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube062.geometry} material={materials['Material.001']} position={[-8.49, 0.03, 13.77]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube063.geometry} material={materials['Material.001']} position={[-2.02, 0.03, 13.77]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube064.geometry} material={materials['Material.001']} position={[4.44, 0.03, 13.77]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube067.geometry} material={materials['Material.001']} position={[10.91, 0.03, 13.77]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube068.geometry} material={materials['Material.001']} position={[16.73, 0.03, 13.77]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -2.62]} />
      <mesh geometry={nodes.Cube259.geometry} material={materials['Material.001']} position={[-16.25, 0.03, -1.54]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube260.geometry} material={materials['Material.001']} position={[-9.79, 0.03, -1.54]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube261.geometry} material={materials['Material.001']} position={[-3.32, 0.03, -1.54]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube262.geometry} material={materials['Material.001']} position={[3.15, 0.03, -1.54]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube263.geometry} material={materials['Material.001']} position={[9.62, 0.03, -1.54]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube264.geometry} material={materials['Material.001']} position={[16.09, 0.03, -1.54]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube265.geometry} material={materials['Material.001']} position={[-16.88, 0.03, -2.12]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -2.64]} />
      <mesh geometry={nodes.Cube266.geometry} material={materials['Material.001']} position={[-11.05, 0.03, -2.12]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube267.geometry} material={materials['Material.001']} position={[-4.58, 0.03, -2.12]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube268.geometry} material={materials['Material.001']} position={[1.89, 0.03, -2.12]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube269.geometry} material={materials['Material.001']} position={[8.36, 0.03, -2.12]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube270.geometry} material={materials['Material.001']} position={[14.83, 0.03, -2.12]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube271.geometry} material={materials['Material.001']} position={[18.68, 0.03, -2.13]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -0.63]} />
      <mesh geometry={nodes.Cube272.geometry} material={materials['Material.001']} position={[-17.59, 0.03, -2.71]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -1.91]} />
      <mesh geometry={nodes.Cube273.geometry} material={materials['Material.001']} position={[-12.48, 0.03, -2.71]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube274.geometry} material={materials['Material.001']} position={[-6.01, 0.03, -2.71]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube275.geometry} material={materials['Material.001']} position={[0.45, 0.03, -2.71]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube276.geometry} material={materials['Material.001']} position={[6.92, 0.03, -2.71]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube277.geometry} material={materials['Material.001']} position={[13.39, 0.03, -2.71]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube278.geometry} material={materials['Material.001']} position={[17.96, 0.03, -2.71]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -1.36]} />
      <mesh geometry={nodes.Cube279.geometry} material={materials['Material.001']} position={[-18.19, 0.03, -3.3]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -1.29]} />
      <mesh geometry={nodes.Cube280.geometry} material={materials['Material.001']} position={[-13.69, 0.03, -3.3]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube281.geometry} material={materials['Material.001']} position={[-7.22, 0.03, -3.3]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube282.geometry} material={materials['Material.001']} position={[-0.75, 0.03, -3.3]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube283.geometry} material={materials['Material.001']} position={[5.72, 0.03, -3.3]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube284.geometry} material={materials['Material.001']} position={[12.19, 0.03, -3.3]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube285.geometry} material={materials['Material.001']} position={[17.36, 0.03, -3.3]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -1.97]} />
      <mesh geometry={nodes.Cube286.geometry} material={materials['Material.001']} position={[-18.83, 0.03, -3.89]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -0.64]} />
      <mesh geometry={nodes.Cube287.geometry} material={materials['Material.001']} position={[-14.96, 0.03, -3.89]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube288.geometry} material={materials['Material.001']} position={[-8.49, 0.03, -3.89]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube289.geometry} material={materials['Material.001']} position={[-2.02, 0.03, -3.89]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube290.geometry} material={materials['Material.001']} position={[4.44, 0.03, -3.89]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube291.geometry} material={materials['Material.001']} position={[10.91, 0.03, -3.89]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube292.geometry} material={materials['Material.001']} position={[16.73, 0.03, -3.89]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -2.62]} />
      <mesh geometry={nodes.Cube069.geometry} material={materials['Material.001']} position={[-16.25, 0.03, 13.18]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube070.geometry} material={materials['Material.001']} position={[-9.79, 0.03, 13.18]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube071.geometry} material={materials['Material.001']} position={[-3.32, 0.03, 13.18]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube072.geometry} material={materials['Material.001']} position={[3.15, 0.03, 13.18]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube073.geometry} material={materials['Material.001']} position={[9.62, 0.03, 13.18]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube074.geometry} material={materials['Material.001']} position={[16.09, 0.03, 13.18]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube075.geometry} material={materials['Material.001']} position={[-16.88, 0.03, 12.59]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -2.64]} />
      <mesh geometry={nodes.Cube076.geometry} material={materials['Material.001']} position={[-11.05, 0.03, 12.59]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube077.geometry} material={materials['Material.001']} position={[-4.58, 0.03, 12.59]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube078.geometry} material={materials['Material.001']} position={[1.89, 0.03, 12.59]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube079.geometry} material={materials['Material.001']} position={[8.36, 0.03, 12.59]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube080.geometry} material={materials['Material.001']} position={[14.83, 0.03, 12.59]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube081.geometry} material={materials['Material.001']} position={[18.68, 0.03, 12.59]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -0.63]} />
      <mesh geometry={nodes.Cube082.geometry} material={materials['Material.001']} position={[-17.59, 0.03, 12]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -1.91]} />
      <mesh geometry={nodes.Cube083.geometry} material={materials['Material.001']} position={[-12.48, 0.03, 12]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube084.geometry} material={materials['Material.001']} position={[-6.01, 0.03, 12]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube085.geometry} material={materials['Material.001']} position={[0.45, 0.03, 12]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube086.geometry} material={materials['Material.001']} position={[6.92, 0.03, 12]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube087.geometry} material={materials['Material.001']} position={[13.39, 0.03, 12]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube088.geometry} material={materials['Material.001']} position={[17.96, 0.03, 12.01]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -1.36]} />
      <mesh geometry={nodes.Cube089.geometry} material={materials['Material.001']} position={[-18.19, 0.03, 11.42]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -1.29]} />
      <mesh geometry={nodes.Cube090.geometry} material={materials['Material.001']} position={[-13.69, 0.03, 11.42]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube091.geometry} material={materials['Material.001']} position={[-7.22, 0.03, 11.42]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube092.geometry} material={materials['Material.001']} position={[-0.75, 0.03, 11.42]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube093.geometry} material={materials['Material.001']} position={[5.72, 0.03, 11.42]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube094.geometry} material={materials['Material.001']} position={[12.19, 0.03, 11.42]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube095.geometry} material={materials['Material.001']} position={[17.36, 0.03, 11.42]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -1.97]} />
      <mesh geometry={nodes.Cube096.geometry} material={materials['Material.001']} position={[-18.83, 0.03, 10.83]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -0.64]} />
      <mesh geometry={nodes.Cube097.geometry} material={materials['Material.001']} position={[-14.96, 0.03, 10.83]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube098.geometry} material={materials['Material.001']} position={[-8.49, 0.03, 10.83]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube099.geometry} material={materials['Material.001']} position={[-2.02, 0.03, 10.83]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube100.geometry} material={materials['Material.001']} position={[4.44, 0.03, 10.83]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube101.geometry} material={materials['Material.001']} position={[10.91, 0.03, 10.83]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube102.geometry} material={materials['Material.001']} position={[16.73, 0.03, 10.83]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -2.62]} />
      <mesh geometry={nodes.Cube293.geometry} material={materials['Material.001']} position={[-16.25, 0.03, -4.48]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube294.geometry} material={materials['Material.001']} position={[-9.79, 0.03, -4.48]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube295.geometry} material={materials['Material.001']} position={[-3.32, 0.03, -4.48]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube296.geometry} material={materials['Material.001']} position={[3.15, 0.03, -4.48]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube297.geometry} material={materials['Material.001']} position={[9.62, 0.03, -4.48]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube298.geometry} material={materials['Material.001']} position={[16.09, 0.03, -4.48]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube299.geometry} material={materials['Material.001']} position={[-16.88, 0.03, -5.07]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -2.64]} />
      <mesh geometry={nodes.Cube300.geometry} material={materials['Material.001']} position={[-11.05, 0.03, -5.07]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube301.geometry} material={materials['Material.001']} position={[-4.58, 0.03, -5.07]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube302.geometry} material={materials['Material.001']} position={[1.89, 0.03, -5.07]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube303.geometry} material={materials['Material.001']} position={[8.36, 0.03, -5.07]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube304.geometry} material={materials['Material.001']} position={[14.83, 0.03, -5.07]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube305.geometry} material={materials['Material.001']} position={[18.68, 0.03, -5.07]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -0.63]} />
      <mesh geometry={nodes.Cube306.geometry} material={materials['Material.001']} position={[-17.59, 0.03, -5.66]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -1.91]} />
      <mesh geometry={nodes.Cube307.geometry} material={materials['Material.001']} position={[-12.48, 0.03, -5.66]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube308.geometry} material={materials['Material.001']} position={[-6.01, 0.03, -5.66]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube309.geometry} material={materials['Material.001']} position={[0.45, 0.03, -5.66]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube310.geometry} material={materials['Material.001']} position={[6.92, 0.03, -5.66]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube311.geometry} material={materials['Material.001']} position={[13.39, 0.03, -5.66]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube312.geometry} material={materials['Material.001']} position={[17.96, 0.03, -5.66]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -1.36]} />
      <mesh geometry={nodes.Cube313.geometry} material={materials['Material.001']} position={[-18.19, 0.03, -6.25]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -1.29]} />
      <mesh geometry={nodes.Cube314.geometry} material={materials['Material.001']} position={[-13.69, 0.03, -6.25]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube315.geometry} material={materials['Material.001']} position={[-7.22, 0.03, -6.25]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube316.geometry} material={materials['Material.001']} position={[-0.75, 0.03, -6.25]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube317.geometry} material={materials['Material.001']} position={[5.72, 0.03, -6.25]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube318.geometry} material={materials['Material.001']} position={[12.19, 0.03, -6.25]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube319.geometry} material={materials['Material.001']} position={[17.36, 0.03, -6.24]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -1.97]} />
      <mesh geometry={nodes.Cube320.geometry} material={materials['Material.001']} position={[-18.83, 0.03, -6.83]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -0.64]} />
      <mesh geometry={nodes.Cube321.geometry} material={materials['Material.001']} position={[-14.96, 0.03, -6.83]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube322.geometry} material={materials['Material.001']} position={[-8.49, 0.03, -6.83]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube323.geometry} material={materials['Material.001']} position={[-2.02, 0.03, -6.83]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube324.geometry} material={materials['Material.001']} position={[4.44, 0.03, -6.83]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube325.geometry} material={materials['Material.001']} position={[10.91, 0.03, -6.83]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube326.geometry} material={materials['Material.001']} position={[16.73, 0.03, -6.83]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -2.62]} />
      <mesh geometry={nodes.Cube103.geometry} material={materials['Material.001']} position={[-16.25, 0.03, 10.24]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube104.geometry} material={materials['Material.001']} position={[-9.79, 0.03, 10.24]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube105.geometry} material={materials['Material.001']} position={[-3.32, 0.03, 10.24]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube106.geometry} material={materials['Material.001']} position={[3.15, 0.03, 10.24]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube107.geometry} material={materials['Material.001']} position={[9.62, 0.03, 10.24]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube108.geometry} material={materials['Material.001']} position={[16.09, 0.03, 10.24]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube109.geometry} material={materials['Material.001']} position={[-16.88, 0.03, 9.65]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -2.64]} />
      <mesh geometry={nodes.Cube110.geometry} material={materials['Material.001']} position={[-11.05, 0.03, 9.65]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube111.geometry} material={materials['Material.001']} position={[-4.58, 0.03, 9.65]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube112.geometry} material={materials['Material.001']} position={[1.89, 0.03, 9.65]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube113.geometry} material={materials['Material.001']} position={[8.36, 0.03, 9.65]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube114.geometry} material={materials['Material.001']} position={[14.83, 0.03, 9.65]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube115.geometry} material={materials['Material.001']} position={[18.68, 0.03, 9.65]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -0.63]} />
      <mesh geometry={nodes.Cube116.geometry} material={materials['Material.001']} position={[-17.59, 0.03, 9.06]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -1.91]} />
      <mesh geometry={nodes.Cube117.geometry} material={materials['Material.001']} position={[-12.48, 0.03, 9.06]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube118.geometry} material={materials['Material.001']} position={[-6.01, 0.03, 9.06]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube119.geometry} material={materials['Material.001']} position={[0.45, 0.03, 9.06]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube120.geometry} material={materials['Material.001']} position={[6.92, 0.03, 9.06]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube121.geometry} material={materials['Material.001']} position={[13.39, 0.03, 9.06]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube122.geometry} material={materials['Material.001']} position={[17.96, 0.03, 9.06]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -1.36]} />
      <mesh geometry={nodes.Cube123.geometry} material={materials['Material.001']} position={[-18.19, 0.03, 8.47]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -1.29]} />
      <mesh geometry={nodes.Cube124.geometry} material={materials['Material.001']} position={[-13.69, 0.03, 8.47]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube125.geometry} material={materials['Material.001']} position={[-7.22, 0.03, 8.47]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube126.geometry} material={materials['Material.001']} position={[-0.75, 0.03, 8.47]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube127.geometry} material={materials['Material.001']} position={[5.72, 0.03, 8.47]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube128.geometry} material={materials['Material.001']} position={[12.19, 0.03, 8.47]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube129.geometry} material={materials['Material.001']} position={[17.36, 0.03, 8.48]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -1.97]} />
      <mesh geometry={nodes.Cube130.geometry} material={materials['Material.001']} position={[-18.83, 0.03, 7.89]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -0.64]} />
      <mesh geometry={nodes.Cube131.geometry} material={materials['Material.001']} position={[-14.96, 0.03, 7.89]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube132.geometry} material={materials['Material.001']} position={[-8.49, 0.03, 7.89]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube133.geometry} material={materials['Material.001']} position={[-2.02, 0.03, 7.89]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube134.geometry} material={materials['Material.001']} position={[4.44, 0.03, 7.89]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube135.geometry} material={materials['Material.001']} position={[10.91, 0.03, 7.89]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube136.geometry} material={materials['Material.001']} position={[16.73, 0.03, 7.89]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -2.62]} />
      <mesh geometry={nodes.Cube327.geometry} material={materials['Material.001']} position={[-16.25, 0.03, -7.42]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube328.geometry} material={materials['Material.001']} position={[-9.79, 0.03, -7.42]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube329.geometry} material={materials['Material.001']} position={[-3.32, 0.03, -7.42]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube330.geometry} material={materials['Material.001']} position={[3.15, 0.03, -7.42]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube331.geometry} material={materials['Material.001']} position={[9.62, 0.03, -7.42]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube332.geometry} material={materials['Material.001']} position={[16.09, 0.03, -7.42]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube333.geometry} material={materials['Material.001']} position={[-16.88, 0.03, -8.01]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -2.64]} />
      <mesh geometry={nodes.Cube334.geometry} material={materials['Material.001']} position={[-11.05, 0.03, -8.01]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube335.geometry} material={materials['Material.001']} position={[-4.58, 0.03, -8.01]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube336.geometry} material={materials['Material.001']} position={[1.89, 0.03, -8.01]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube337.geometry} material={materials['Material.001']} position={[8.36, 0.03, -8.01]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube338.geometry} material={materials['Material.001']} position={[14.83, 0.03, -8.01]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube339.geometry} material={materials['Material.001']} position={[18.68, 0.03, -8.01]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -0.63]} />
      <mesh geometry={nodes.Cube340.geometry} material={materials['Material.001']} position={[-17.59, 0.03, -8.6]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -1.91]} />
      <mesh geometry={nodes.Cube341.geometry} material={materials['Material.001']} position={[-12.48, 0.03, -8.6]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube342.geometry} material={materials['Material.001']} position={[-6.01, 0.03, -8.6]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube343.geometry} material={materials['Material.001']} position={[0.45, 0.03, -8.6]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube344.geometry} material={materials['Material.001']} position={[6.92, 0.03, -8.6]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube345.geometry} material={materials['Material.001']} position={[13.39, 0.03, -8.6]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube346.geometry} material={materials['Material.001']} position={[17.96, 0.03, -8.6]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -1.36]} />
      <mesh geometry={nodes.Cube347.geometry} material={materials['Material.001']} position={[-18.19, 0.03, -9.19]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -1.29]} />
      <mesh geometry={nodes.Cube348.geometry} material={materials['Material.001']} position={[-13.69, 0.03, -9.19]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube349.geometry} material={materials['Material.001']} position={[-7.22, 0.03, -9.19]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube350.geometry} material={materials['Material.001']} position={[-0.75, 0.03, -9.19]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube351.geometry} material={materials['Material.001']} position={[5.72, 0.03, -9.19]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube352.geometry} material={materials['Material.001']} position={[12.19, 0.03, -9.19]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube353.geometry} material={materials['Material.001']} position={[17.36, 0.03, -9.19]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -1.97]} />
      <mesh geometry={nodes.Cube354.geometry} material={materials['Material.001']} position={[-18.83, 0.03, -9.78]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -0.64]} />
      <mesh geometry={nodes.Cube355.geometry} material={materials['Material.001']} position={[-14.96, 0.03, -9.78]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube356.geometry} material={materials['Material.001']} position={[-8.49, 0.03, -9.78]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube357.geometry} material={materials['Material.001']} position={[-2.02, 0.03, -9.78]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube358.geometry} material={materials['Material.001']} position={[4.44, 0.03, -9.78]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube359.geometry} material={materials['Material.001']} position={[10.91, 0.03, -9.78]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube360.geometry} material={materials['Material.001']} position={[16.73, 0.03, -9.77]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -2.62]} />
      <mesh geometry={nodes.Cube137.geometry} material={materials['Material.001']} position={[-16.25, 0.03, 7.3]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube138.geometry} material={materials['Material.001']} position={[-9.79, 0.03, 7.3]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube139.geometry} material={materials['Material.001']} position={[-3.32, 0.03, 7.3]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube140.geometry} material={materials['Material.001']} position={[3.15, 0.03, 7.3]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube141.geometry} material={materials['Material.001']} position={[9.62, 0.03, 7.3]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube142.geometry} material={materials['Material.001']} position={[16.09, 0.03, 7.3]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube143.geometry} material={materials['Material.001']} position={[-16.88, 0.03, 6.71]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -2.64]} />
      <mesh geometry={nodes.Cube144.geometry} material={materials['Material.001']} position={[-11.05, 0.03, 6.71]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube145.geometry} material={materials['Material.001']} position={[-4.58, 0.03, 6.71]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube146.geometry} material={materials['Material.001']} position={[1.89, 0.03, 6.71]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube147.geometry} material={materials['Material.001']} position={[8.36, 0.03, 6.71]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube148.geometry} material={materials['Material.001']} position={[14.83, 0.03, 6.71]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube149.geometry} material={materials['Material.001']} position={[18.68, 0.03, 6.71]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -0.63]} />
      <mesh geometry={nodes.Cube150.geometry} material={materials['Material.001']} position={[-17.59, 0.03, 6.12]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -1.91]} />
      <mesh geometry={nodes.Cube151.geometry} material={materials['Material.001']} position={[-12.48, 0.03, 6.12]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube152.geometry} material={materials['Material.001']} position={[-6.01, 0.03, 6.12]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube153.geometry} material={materials['Material.001']} position={[0.45, 0.03, 6.12]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube154.geometry} material={materials['Material.001']} position={[6.92, 0.03, 6.12]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube155.geometry} material={materials['Material.001']} position={[13.39, 0.03, 6.12]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube156.geometry} material={materials['Material.001']} position={[17.96, 0.03, 6.12]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -1.36]} />
      <mesh geometry={nodes.Cube157.geometry} material={materials['Material.001']} position={[-18.19, 0.03, 5.53]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -1.29]} />
      <mesh geometry={nodes.Cube158.geometry} material={materials['Material.001']} position={[-13.69, 0.03, 5.53]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube159.geometry} material={materials['Material.001']} position={[-7.22, 0.03, 5.53]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube160.geometry} material={materials['Material.001']} position={[-0.75, 0.03, 5.53]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube161.geometry} material={materials['Material.001']} position={[5.72, 0.03, 5.53]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube162.geometry} material={materials['Material.001']} position={[12.19, 0.03, 5.53]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube163.geometry} material={materials['Material.001']} position={[17.36, 0.03, 5.53]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -1.97]} />
      <mesh geometry={nodes.Cube164.geometry} material={materials['Material.001']} position={[-18.83, 0.03, 4.94]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -0.64]} />
      <mesh geometry={nodes.Cube165.geometry} material={materials['Material.001']} position={[-14.96, 0.03, 4.94]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube166.geometry} material={materials['Material.001']} position={[-8.49, 0.03, 4.94]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube167.geometry} material={materials['Material.001']} position={[-2.02, 0.03, 4.94]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube168.geometry} material={materials['Material.001']} position={[4.44, 0.03, 4.94]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube169.geometry} material={materials['Material.001']} position={[10.91, 0.03, 4.94]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube170.geometry} material={materials['Material.001']} position={[16.73, 0.03, 4.94]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -2.62]} />
      <mesh geometry={nodes.Cube361.geometry} material={materials['Material.001']} position={[-16.25, 0.03, -10.36]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube362.geometry} material={materials['Material.001']} position={[-9.79, 0.03, -10.36]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube363.geometry} material={materials['Material.001']} position={[-3.32, 0.03, -10.36]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube364.geometry} material={materials['Material.001']} position={[3.15, 0.03, -10.36]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube365.geometry} material={materials['Material.001']} position={[9.62, 0.03, -10.36]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube366.geometry} material={materials['Material.001']} position={[16.09, 0.03, -10.36]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube367.geometry} material={materials['Material.001']} position={[-16.88, 0.03, -10.95]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -2.64]} />
      <mesh geometry={nodes.Cube368.geometry} material={materials['Material.001']} position={[-11.05, 0.03, -10.95]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube369.geometry} material={materials['Material.001']} position={[-4.58, 0.03, -10.95]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube370.geometry} material={materials['Material.001']} position={[1.89, 0.03, -10.95]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube371.geometry} material={materials['Material.001']} position={[8.36, 0.03, -10.95]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube372.geometry} material={materials['Material.001']} position={[14.83, 0.03, -10.95]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube373.geometry} material={materials['Material.001']} position={[18.68, 0.03, -10.95]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -0.63]} />
      <mesh geometry={nodes.Cube374.geometry} material={materials['Material.001']} position={[-17.59, 0.03, -11.54]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -1.91]} />
      <mesh geometry={nodes.Cube375.geometry} material={materials['Material.001']} position={[-12.48, 0.03, -11.54]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube376.geometry} material={materials['Material.001']} position={[-6.01, 0.03, -11.54]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube377.geometry} material={materials['Material.001']} position={[0.45, 0.03, -11.54]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube378.geometry} material={materials['Material.001']} position={[6.92, 0.03, -11.54]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube379.geometry} material={materials['Material.001']} position={[13.39, 0.03, -11.54]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube380.geometry} material={materials['Material.001']} position={[17.96, 0.03, -11.54]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -1.36]} />
      <mesh geometry={nodes.Cube381.geometry} material={materials['Material.001']} position={[-18.19, 0.03, -12.13]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -1.29]} />
      <mesh geometry={nodes.Cube382.geometry} material={materials['Material.001']} position={[-13.69, 0.03, -12.13]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube383.geometry} material={materials['Material.001']} position={[-7.22, 0.03, -12.13]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube384.geometry} material={materials['Material.001']} position={[-0.75, 0.03, -12.13]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube385.geometry} material={materials['Material.001']} position={[5.72, 0.03, -12.13]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube386.geometry} material={materials['Material.001']} position={[12.19, 0.03, -12.13]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube387.geometry} material={materials['Material.001']} position={[17.36, 0.03, -12.13]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -1.97]} />
      <mesh geometry={nodes.Cube388.geometry} material={materials['Material.001']} position={[-18.83, 0.03, -12.72]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -0.64]} />
      <mesh geometry={nodes.Cube389.geometry} material={materials['Material.001']} position={[-14.96, 0.03, -12.72]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube390.geometry} material={materials['Material.001']} position={[-8.49, 0.03, -12.72]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube391.geometry} material={materials['Material.001']} position={[-2.02, 0.03, -12.72]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube392.geometry} material={materials['Material.001']} position={[4.44, 0.03, -12.72]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube393.geometry} material={materials['Material.001']} position={[10.91, 0.03, -12.72]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube394.geometry} material={materials['Material.001']} position={[16.73, 0.03, -12.72]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -2.62]} />
      <mesh geometry={nodes.Cube171.geometry} material={materials['Material.001']} position={[-16.25, 0.03, 4.36]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube172.geometry} material={materials['Material.001']} position={[-9.79, 0.03, 4.36]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube173.geometry} material={materials['Material.001']} position={[-3.32, 0.03, 4.36]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube174.geometry} material={materials['Material.001']} position={[3.15, 0.03, 4.36]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube175.geometry} material={materials['Material.001']} position={[9.62, 0.03, 4.36]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube176.geometry} material={materials['Material.001']} position={[16.09, 0.03, 4.36]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube177.geometry} material={materials['Material.001']} position={[-16.88, 0.03, 3.77]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -2.64]} />
      <mesh geometry={nodes.Cube178.geometry} material={materials['Material.001']} position={[-11.05, 0.03, 3.77]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube179.geometry} material={materials['Material.001']} position={[-4.58, 0.03, 3.77]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube180.geometry} material={materials['Material.001']} position={[1.89, 0.03, 3.77]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube181.geometry} material={materials['Material.001']} position={[8.36, 0.03, 3.77]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube182.geometry} material={materials['Material.001']} position={[14.83, 0.03, 3.77]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube183.geometry} material={materials['Material.001']} position={[18.68, 0.03, 3.77]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -0.63]} />
      <mesh geometry={nodes.Cube184.geometry} material={materials['Material.001']} position={[-17.59, 0.03, 3.18]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -1.91]} />
      <mesh geometry={nodes.Cube185.geometry} material={materials['Material.001']} position={[-12.48, 0.03, 3.18]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube186.geometry} material={materials['Material.001']} position={[-6.01, 0.03, 3.18]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube187.geometry} material={materials['Material.001']} position={[0.45, 0.03, 3.18]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube188.geometry} material={materials['Material.001']} position={[6.92, 0.03, 3.18]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube189.geometry} material={materials['Material.001']} position={[13.39, 0.03, 3.18]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube190.geometry} material={materials['Material.001']} position={[17.96, 0.03, 3.18]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -1.36]} />
      <mesh geometry={nodes.Cube191.geometry} material={materials['Material.001']} position={[-18.19, 0.03, 2.59]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -1.29]} />
      <mesh geometry={nodes.Cube192.geometry} material={materials['Material.001']} position={[-13.69, 0.03, 2.59]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube193.geometry} material={materials['Material.001']} position={[-7.22, 0.03, 2.59]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube194.geometry} material={materials['Material.001']} position={[-0.75, 0.03, 2.59]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube195.geometry} material={materials['Material.001']} position={[5.72, 0.03, 2.59]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube196.geometry} material={materials['Material.001']} position={[12.19, 0.03, 2.59]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube197.geometry} material={materials['Material.001']} position={[17.36, 0.03, 2.59]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -1.97]} />
      <mesh geometry={nodes.Cube198.geometry} material={materials['Material.001']} position={[-18.83, 0.03, 2]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -0.64]} />
      <mesh geometry={nodes.Cube199.geometry} material={materials['Material.001']} position={[-14.96, 0.03, 2]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube200.geometry} material={materials['Material.001']} position={[-8.49, 0.03, 2]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube201.geometry} material={materials['Material.001']} position={[-2.02, 0.03, 2]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube202.geometry} material={materials['Material.001']} position={[4.44, 0.03, 2]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube203.geometry} material={materials['Material.001']} position={[10.91, 0.03, 2]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube204.geometry} material={materials['Material.001']} position={[16.73, 0.03, 2]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -2.62]} />
      <mesh geometry={nodes.Cube395.geometry} material={materials['Material.001']} position={[-16.25, 0.03, -13.3]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube396.geometry} material={materials['Material.001']} position={[-9.79, 0.03, -13.3]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube397.geometry} material={materials['Material.001']} position={[-3.32, 0.03, -13.3]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube398.geometry} material={materials['Material.001']} position={[3.15, 0.03, -13.3]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube399.geometry} material={materials['Material.001']} position={[9.62, 0.03, -13.3]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube400.geometry} material={materials['Material.001']} position={[16.09, 0.03, -13.3]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube401.geometry} material={materials['Material.001']} position={[-16.88, 0.03, -13.89]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -2.64]} />
      <mesh geometry={nodes.Cube402.geometry} material={materials['Material.001']} position={[-11.05, 0.03, -13.89]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube403.geometry} material={materials['Material.001']} position={[-4.58, 0.03, -13.89]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube404.geometry} material={materials['Material.001']} position={[1.89, 0.03, -13.89]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube405.geometry} material={materials['Material.001']} position={[8.36, 0.03, -13.89]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube406.geometry} material={materials['Material.001']} position={[14.83, 0.03, -13.89]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube407.geometry} material={materials['Material.001']} position={[18.68, 0.03, -13.9]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -0.63]} />
      <mesh geometry={nodes.Cube408.geometry} material={materials['Material.001']} position={[-17.59, 0.03, -14.48]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -1.91]} />
      <mesh geometry={nodes.Cube409.geometry} material={materials['Material.001']} position={[-12.48, 0.03, -14.48]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube410.geometry} material={materials['Material.001']} position={[-6.01, 0.03, -14.48]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube411.geometry} material={materials['Material.001']} position={[0.45, 0.03, -14.48]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube412.geometry} material={materials['Material.001']} position={[6.92, 0.03, -14.48]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube413.geometry} material={materials['Material.001']} position={[13.39, 0.03, -14.48]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube414.geometry} material={materials['Material.001']} position={[17.96, 0.03, -14.48]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -1.36]} />
      <mesh geometry={nodes.Cube415.geometry} material={materials['Material.001']} position={[-18.19, 0.03, -15.07]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -1.29]} />
      <mesh geometry={nodes.Cube416.geometry} material={materials['Material.001']} position={[-13.69, 0.03, -15.07]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube417.geometry} material={materials['Material.001']} position={[-7.22, 0.03, -15.07]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube418.geometry} material={materials['Material.001']} position={[-0.75, 0.03, -15.07]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube419.geometry} material={materials['Material.001']} position={[5.72, 0.03, -15.07]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube420.geometry} material={materials['Material.001']} position={[12.19, 0.03, -15.07]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube421.geometry} material={materials['Material.001']} position={[17.36, 0.03, -15.07]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -1.97]} />
      <mesh geometry={nodes.Cube422.geometry} material={materials['Material.001']} position={[-18.83, 0.03, -15.66]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -0.64]} />
      <mesh geometry={nodes.Cube423.geometry} material={materials['Material.001']} position={[-14.96, 0.03, -15.66]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube424.geometry} material={materials['Material.001']} position={[-8.49, 0.03, -15.66]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube425.geometry} material={materials['Material.001']} position={[-2.02, 0.03, -15.66]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube426.geometry} material={materials['Material.001']} position={[4.44, 0.03, -15.66]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube427.geometry} material={materials['Material.001']} position={[10.91, 0.03, -15.66]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube428.geometry} material={materials['Material.001']} position={[16.73, 0.03, -15.66]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -2.62]} />
      <mesh geometry={nodes.Cube225.geometry} material={materials['Material.001']} position={[-18.19, 0.03, -18.02]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -1.29]} />
      <mesh geometry={nodes.Cube226.geometry} material={materials['Material.001']} position={[-13.69, 0.03, -18.02]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube227.geometry} material={materials['Material.001']} position={[-7.22, 0.03, -18.02]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube228.geometry} material={materials['Material.001']} position={[-0.75, 0.03, -18.02]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube229.geometry} material={materials['Material.001']} position={[5.72, 0.03, -18.02]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube230.geometry} material={materials['Material.001']} position={[12.19, 0.03, -18.02]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube231.geometry} material={materials['Material.001']} position={[17.36, 0.03, -18.02]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -1.97]} />
      <mesh geometry={nodes.Cube232.geometry} material={materials['Material.001']} position={[-18.83, 0.03, -18.61]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -0.64]} />
      <mesh geometry={nodes.Cube233.geometry} material={materials['Material.001']} position={[-14.96, 0.03, -18.61]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube234.geometry} material={materials['Material.001']} position={[-8.49, 0.03, -18.61]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube235.geometry} material={materials['Material.001']} position={[-2.02, 0.03, -18.61]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube236.geometry} material={materials['Material.001']} position={[4.44, 0.03, -18.61]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube237.geometry} material={materials['Material.001']} position={[10.91, 0.03, -18.61]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube238.geometry} material={materials['Material.001']} position={[16.73, 0.03, -18.6]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -2.62]} />
      <mesh geometry={nodes.Cube205.geometry} material={materials['Material.001']} position={[-16.25, 0.03, 1.41]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube206.geometry} material={materials['Material.001']} position={[-9.79, 0.03, 1.41]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube207.geometry} material={materials['Material.001']} position={[-3.32, 0.03, 1.41]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube208.geometry} material={materials['Material.001']} position={[3.15, 0.03, 1.41]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube209.geometry} material={materials['Material.001']} position={[9.62, 0.03, 1.41]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube210.geometry} material={materials['Material.001']} position={[16.09, 0.03, 1.41]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube211.geometry} material={materials['Material.001']} position={[-16.88, 0.03, 0.82]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -2.64]} />
      <mesh geometry={nodes.Cube212.geometry} material={materials['Material.001']} position={[-11.05, 0.03, 0.82]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube213.geometry} material={materials['Material.001']} position={[-4.58, 0.03, 0.82]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube214.geometry} material={materials['Material.001']} position={[1.89, 0.03, 0.82]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube215.geometry} material={materials['Material.001']} position={[8.36, 0.03, 0.82]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube216.geometry} material={materials['Material.001']} position={[14.83, 0.03, 0.82]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube217.geometry} material={materials['Material.001']} position={[18.68, 0.03, 0.82]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -0.63]} />
      <mesh geometry={nodes.Cube218.geometry} material={materials['Material.001']} position={[-17.59, 0.03, 0.23]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -1.91]} />
      <mesh geometry={nodes.Cube219.geometry} material={materials['Material.001']} position={[-12.48, 0.03, 0.23]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube220.geometry} material={materials['Material.001']} position={[-6.01, 0.03, 0.23]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube221.geometry} material={materials['Material.001']} position={[0.45, 0.03, 0.23]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube222.geometry} material={materials['Material.001']} position={[6.92, 0.03, 0.23]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube223.geometry} material={materials['Material.001']} position={[13.39, 0.03, 0.23]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube224.geometry} material={materials['Material.001']} position={[17.96, 0.03, 0.24]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -1.36]} />
      <mesh geometry={nodes.Cube429.geometry} material={materials['Material.001']} position={[-16.25, 0.03, -16.25]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube430.geometry} material={materials['Material.001']} position={[-9.79, 0.03, -16.25]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube431.geometry} material={materials['Material.001']} position={[-3.32, 0.03, -16.25]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube432.geometry} material={materials['Material.001']} position={[3.15, 0.03, -16.25]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube433.geometry} material={materials['Material.001']} position={[9.62, 0.03, -16.25]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube434.geometry} material={materials['Material.001']} position={[16.09, 0.03, -16.25]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube435.geometry} material={materials['Material.001']} position={[-16.88, 0.03, -16.84]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -2.64]} />
      <mesh geometry={nodes.Cube436.geometry} material={materials['Material.001']} position={[-11.05, 0.03, -16.84]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube437.geometry} material={materials['Material.001']} position={[-4.58, 0.03, -16.84]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube438.geometry} material={materials['Material.001']} position={[1.89, 0.03, -16.84]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube439.geometry} material={materials['Material.001']} position={[8.36, 0.03, -16.84]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube440.geometry} material={materials['Material.001']} position={[14.83, 0.03, -16.84]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube441.geometry} material={materials['Material.001']} position={[18.68, 0.03, -16.84]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -0.63]} />
      <mesh geometry={nodes.Cube442.geometry} material={materials['Material.001']} position={[-17.59, 0.03, -17.43]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -1.91]} />
      <mesh geometry={nodes.Cube443.geometry} material={materials['Material.001']} position={[-12.48, 0.03, -17.43]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube444.geometry} material={materials['Material.001']} position={[-6.01, 0.03, -17.43]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube445.geometry} material={materials['Material.001']} position={[0.45, 0.03, -17.43]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube446.geometry} material={materials['Material.001']} position={[6.92, 0.03, -17.43]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube447.geometry} material={materials['Material.001']} position={[13.39, 0.03, -17.43]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube448.geometry} material={materials['Material.001']} position={[17.96, 0.03, -17.43]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -1.36]} />
      <mesh geometry={nodes.Cube239.geometry} material={materials['Material.001']} position={[-16.25, 0.03, -19.19]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube240.geometry} material={materials['Material.001']} position={[-9.79, 0.03, -19.19]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube241.geometry} material={materials['Material.001']} position={[-3.32, 0.03, -19.19]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube242.geometry} material={materials['Material.001']} position={[3.15, 0.03, -19.19]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube243.geometry} material={materials['Material.001']} position={[9.62, 0.03, -19.19]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
      <mesh geometry={nodes.Cube244.geometry} material={materials['Material.001']} position={[16.09, 0.03, -19.19]} rotation={[0, -1.57, 0]} scale={[-0.29, -0.14, -3.28]} />
    </group>
  );
};

useGLTF.preload(url);
