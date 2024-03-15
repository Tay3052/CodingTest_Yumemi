import { useEffect } from "react";
import { useState } from "react";
import getPref from "../Interface/Interface";
import { getPrefs } from "../API/APIs";
import { AxiosResponse } from "axios";

const Top = () => {
  const [prefectures, setPrefectures] = useState<getPref[] | null>(null);

  const prefLists = async (): Promise<getPref[]> => {
    try {
      const res: AxiosResponse<getPref[]> = await getPrefs();
      if (!res) {
        throw new Error("データが取得できませんでした");
      }
      return res.data;
    } catch (e) {
      console.log(e);
      return [];
    }
  };
  useEffect(() => {
    prefLists().then((data) => {
      setPrefectures(data);
    });
  }, []);

  return (
    <>
      <div>
        <h2>都道府県一覧</h2>

        <table>
          <tbody>
            {prefectures &&
              prefectures.result.map((pref, index) => (
                <tr key={pref.prefCode}>
                  <td>
                    <input type="checkbox" name="pref" value={pref.prefCode} />
                  </td>
                  <td>{pref.prefName}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export { Top };
